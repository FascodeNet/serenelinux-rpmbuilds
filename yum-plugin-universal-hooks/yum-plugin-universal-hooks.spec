Name: yum-plugin-universal-hooks
Version: 0.2.1
# Doing release_prefix this way for Release allows for OBS-proof versioning, See EA-4598 for more details
%define release_prefix 15
Release: %{release_prefix}
Summary: Yum plugin to run arbitrary commands at any slot. For slots involving package transactions it can be limited to a specific name or glob.

Group: Development/Tools
License: BSD 2-Clause
Vendor: cPanel, Inc.
Requires: yum-utils
Source0: https://github.com/kokkiemouse/yum-plugin-universal-hooks/archive/master.tar.gz

BuildRequires: python39 dnf python3-dnf python3-libdnf
Requires: python dnf python3-dnf python3-libdnf
Provides: dnf-plugin-universal-hooks


%define yum_pluginslib  /usr/lib/yum-plugins
%define dnf_pluginslib  /usr/lib/python3.9/site-packages/dnf-plugins/
%global debug_package %{nil}
%prep
%autosetup -n yum-plugin-universal-hooks-master
%description
This plugin allows us to drop scripts into certain paths in order to run arbitrary actions during any slot dnf or yum supports. It can be for all packages or, if the slot involves a transaction with packages involved, for specific packages or packages that match a certain wildcard patterns.

%install
rm -rf %{buildroot}
mkdir -p $RPM_BUILD_ROOT%{_sysconfdir}/dnf/plugins
mkdir -p $RPM_BUILD_ROOT%{dnf_pluginslib}/__pycache__/
install -m 644 SOURCES/universal-hooks.conf $RPM_BUILD_ROOT%{_sysconfdir}/dnf/plugins/universal_hooks.conf
install -m 755 SOURCES/universal-hooks-DNF.py $RPM_BUILD_ROOT%{dnf_pluginslib}/universal_hooks.py
mkdir -p $RPM_BUILD_ROOT%{_sysconfdir}/dnf/universal-hooks
%clean
rm -rf %{buildroot}

%files
%defattr(-,root,root,-)
%{dnf_pluginslib}/universal_hooks.py
%{dnf_pluginslib}__pycache__/universal_hooks.cpython-39.opt-1.pyc
%{dnf_pluginslib}__pycache__/universal_hooks.cpython-39.pyc
%config(noreplace) %{_sysconfdir}/dnf/plugins/universal_hooks.conf
%{_sysconfdir}/dnf/universal-hooks


%changelog
* Mon Jul 06 2020 Dan Muey <dan@cpanel.net> - 0.1-12
- ZC-7100: install dnf version on C8 and above

* Tue May 26 2020 Julian Brown <julian.brown@cpanel.net> - 0.1-11
- ZC-6880: Build on C8

* Mon Sep 09 2019 Dan Muey <dan@cpanel.net> - 0.1-10
- ZC-5357: skip duplicate members to avoid running a hook more than once for no reason

* Fri Sep 16 2016 Darren Mobley <darren@cpanel.net> - 0.1-9
- HB-1952: Added support for sending an argument of --pkglist=/path/to/file
  that has a line by line list of each rpm package being handled by the 
  current operation to the wildcard scripts

* Mon Jun 20 2016 Dan Muey <dan@cpanel.net> - 0.1-8
- EA-4383: Update Release value to OBS-proof versioning

* Wed Jun 03 2015 Darren Mobley <darren@cpanel.net> - 0.1-7
- Added sort function to glob to ensure scripts are run in expected order

* Thu May 07 2015 Dan Muey <dan@cpanel.net> - 0.1-6
- Add Vendor field
- Add README.md version of internal wiki doc
- Overlooked name updates

* Wed May 06 2015 Dan Muey <dan@cpanel.net> - 0.1-5
- Rename to a more descriptive, non-cpanel specific name (since it can be used on any server)

* Wed May 06 2015 Dan Muey <dan@cpanel.net> - 0.1-4
- Update license from cpanel to BSD 2-Clause

* Tue Mar 10 2015 Dan Muey <dan@cpanel.net> - 0.1-3
- use yum_pluginslib instead of _libdir for the plugins path

* Fri Mar 06 2015 Dan Muey <dan@cpanel.net> - 0.1-2
- path fixes

* Thu Mar 05 2015 Dan Muey <dan@cpanel.net> - 0.1-1
- implement spec file
