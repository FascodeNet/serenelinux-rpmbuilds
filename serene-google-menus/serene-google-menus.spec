Summary: serene google menus
Name: serene-google-menus
Version: 1.0.3
Release: 1%{?dist}
Group: User Interface/Desktops
License: NONE
Packager: kokkiemouse
Vendor: INDETAIL

Source0: https://github.com/FascodeNet/serene-google-menus/archive/e5a5c453d4927e22b9382d1b8cd5406d92f6b495.tar.gz
BuildRoot: %{_tmppath}/%{name}-%{version}-buildroot
%global debug_package %{nil}
%description
serene-google-menus
%prep
rm -rf $RPM_BUILD_ROOT

%autosetup -n %{name}-e5a5c453d4927e22b9382d1b8cd5406d92f6b495

%build

%install
rm -rf README.md
cp -arf ./ $RPM_BUILD_ROOT/

%clean
rm -rf $RPM_BUILD_ROOT

%post

%postun

%files
/usr/share/
%changelog
