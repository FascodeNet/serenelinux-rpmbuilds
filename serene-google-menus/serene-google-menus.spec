Summary: serenelinux google menus
Name: serenelinux-google-menus
Version: 1.0.1
Release: 1%{?dist}
Group: User Interface/Desktops
License: NONE
Packager: kokkiemouse
Vendor: INDETAIL

Source: serene-google-menus.tar.gz
BuildRoot: %{_tmppath}/%{name}-%{version}-buildroot

%description
serenelinux-google-menus
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
/usr/share/
%changelog