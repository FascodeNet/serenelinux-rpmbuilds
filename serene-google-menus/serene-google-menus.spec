Summary: serene google menus
Name: serene-google-menus
Version: 1.0.1
Release: 1%{?dist}
Group: User Interface/Desktops
License: NONE
Packager: kokkiemouse
Vendor: INDETAIL

Source0: https://github.com/FascodeNet/serene-google-menus/archive/master.tar.gz
BuildRoot: %{_tmppath}/%{name}-%{version}-buildroot

%description
serene-google-menus
%prep
rm -rf $RPM_BUILD_ROOT

%autosetup -n %{name}

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
