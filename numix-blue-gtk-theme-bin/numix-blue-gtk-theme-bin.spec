%define dist .el64

Summary: numix-blue-gtk-theme-bin
Name: numix-blue-gtk-theme-bin
Version: 1.0.0
Release: 1%{?dist}
Group: System Environment/Shells
License: NONE
Packager: kokkiemouse
Vendor: INDETAIL

Source: numix-blue-gtk-theme-master.tar.gz
BuildRoot: %{_tmppath}/%{name}-%{version}-buildroot
Requires: 

%description
numix blue gtk
%prep
rm -rf $RPM_BUILD_ROOT

%setup -n %{name}

%build

%install
cp -arf ./* $RPM_BUILD_ROOT/*

%clean
rm -rf $RPM_BUILD_ROOT

%post

%postun

%files

%changelog
* Fri OCT 28 2016 INDETAIL - 1.0.0
- Initial release