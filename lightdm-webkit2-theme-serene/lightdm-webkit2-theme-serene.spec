Summary: serenelinux webkit2 theme
Name: lightdm-webkit2-theme-serene
Version: 1.0.0
Release: 1%{?dist}
Group: User Interface/Desktops
License: NONE
Packager: kokkiemouse
Vendor: INDETAIL

Source0: https://github.com/FascodeNet/lightdm-webkit2-theme-serene/archive/master.tar.gz
BuildRoot: %{_tmppath}/%{name}-%{version}-buildroot
%global debug_package %{nil}
%description
serenelinux lightdm theme
%prep
rm -rf $RPM_BUILD_ROOT

%autosetup -n %{name}-master

%build

%install
rm -rf README.md
cp -arf ./ $RPM_BUILD_ROOT/

%clean
rm -rf $RPM_BUILD_ROOT

%post

%postun

%files
/usr/share/lightdm-webkit/themes/serene/
%changelog
