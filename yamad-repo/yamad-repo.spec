Summary: yamad repo
Name: yamad-repo
Version: 1.0.0
Release: 1%{?dist}
Group: System Environment/Shells
License: NONE
Packager: kokkiemouse
Vendor: INDETAIL

Source: yamad-repo.tar.gz
BuildRoot: %{_tmppath}/%{name}-%{version}-buildroot

%description
yamad repo
%prep
rm -rf $RPM_BUILD_ROOT

%setup -n %{name}

%build

%install
mkdir -p $RPM_BUILD_ROOT/etc/yum.repos.d/
cp -arf ./yamad.repo $RPM_BUILD_ROOT/etc/yum.repos.d/

%clean
rm -rf $RPM_BUILD_ROOT

%post

%postun

%files
/etc/yum.repos.d/yamad.repo
%changelog
