Summary: serene-plymouth-theme
Name: serene-plymouth-theme
Version: 1.0.1
Release: 1%{?dist}
Group: User Interface/Desktops
License: NONE
Packager: kokkiemouse
Vendor: INDETAIL
#https://github.com/FascodeNet/plymouth-theme-serene/archive/master.tar.gz
Source: https://github.com/FascodeNet/plymouth-theme-serene/archive/master.tar.gz
BuildRoot: %{_tmppath}/%{name}-%{version}-buildroot
%global debug_package %{nil}
%description
serene-plymouth-theme
%prep
rm -rf $RPM_BUILD_ROOT
#rm -rf plymouth-theme-serene-master/debugsourcefiles.list
%autosetup -n plymouth-theme-serene-master

%build

%install
mkdir -p $RPM_BUILD_ROOT/usr/share/plymouth/themes/serene-logo
cp serene-logo/loading/* $RPM_BUILD_ROOT/usr/share/plymouth/themes/serene-logo/
cp serene-logo/shutdown/* $RPM_BUILD_ROOT/usr/share/plymouth/themes/serene-logo/
cp serene-logo/misc/* $RPM_BUILD_ROOT/usr/share/plymouth/themes/serene-logo/



%clean
rm -rf $RPM_BUILD_ROOT

%post

%postun

%files
/usr/share/plymouth
%changelog
