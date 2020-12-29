Summary: serenelinux livetools
Name: serenelinux-livetools
Version: 1.0.0
Release: 1%{?dist}
Group: User Interface/Desktops
License: NONE
Packager: kokkiemouse
Vendor: INDETAIL

Source0: https://github.com/FascodeNet/serenelinux-livetools/archive/985db11.tar.gz
BuildRoot: %{_tmppath}/%{name}-%{version}-buildroot
%global debug_package %{nil}
%description
serenelinux livetools
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
/usr/bin/serenelinux-desktop-file
/usr/bin/serenelinux-gtk-bookmarks
%changelog
