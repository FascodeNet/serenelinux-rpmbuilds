Summary: yamad repo
Name: yamad-repo
Version: 1.0.1
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
cp -arf ./ $RPM_BUILD_ROOT/

%clean
rm -rf $RPM_BUILD_ROOT

%post

%postun

%files
/etc/yum.repos.d/yamad.repo
%changelog
