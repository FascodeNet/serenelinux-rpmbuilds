Summary: serene-plymouth-theme
Name: serene-plymouth-theme
Version: 1.0.0
Release: 1%{?dist}
Group: User Interface/Desktops
License: NONE
Packager: kokkiemouse
Vendor: INDETAIL
#https://github.com/FascodeNet/plymouth-theme-serene/archive/master.tar.gz
Source: serene-plymouth-theme.tar.gz
BuildRoot: %{_tmppath}/%{name}-%{version}-buildroot

%description
serene-plymouth-theme
%prep
rm -rf $RPM_BUILD_ROOT

%setup -n plymouth-theme-serene-master

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
