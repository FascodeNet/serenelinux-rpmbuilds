%define dist .el64

Summary: numix-blue-gtk-theme-bin
Name: numix-blue-gtk-theme-bin
Version: 1.0.0
Release: 1
Group: System Environment/Shells
License: NONE
Packager: kokkiemouse
Vendor: INDETAIL

Source0: https://github.com/encounter/numix-blue-gtk-theme/archive/master.tar.gz
BuildRequires: rubygem-sass,glib2-devel,gdk-pixbuf2-devel,make
%global debug_package %{nil}
%description
numix blue gtk
%prep
rm -rf %{buildroot}

%setup -n numix-blue-gtk-theme-master

%build
%install
DESTDIR=%{buildroot} make install

%clean
rm -rf %{buildroot}
%files
/usr/share/themes/Numix-Blue/*
%changelog
