Name:           exo_flast
Version:        0.0.1
Release:        0
Summary:        flast exo

Group:          System Environment/Base
License:        GPLv2

URL:            https://fascode.net

BuildRoot:      %{_tmppath}/%{name}-%{version}-%{release}-root-%(%{__id_u} -n)

BuildArch:     noarch

%description
This package contains Flast exo.

%prep

%build

%install
rm -rf rm -rf $RPM_BUILD_ROOT

#GPG Key
mkdir -p %{buildroot}/usr/share/xfce4/helpers/
cat <<EOF > %{buildroot}/usr/share/xfce4/helpers/flast-gecko-nightly.desktop
[Desktop Entry]
Version=1.0
Icon=flast-gecko-nightly
Type=X-XFCE-Helper
Name=Flast Gecko Nightly
StartupNotify=false
X-XFCE-Binaries=flast-gecko-nightly;
X-XFCE-Category=WebBrowser
X-XFCE-Commands=%B;
X-XFCE-CommandsWithParameter=%B "%s";

EOF

%clean
rm -rf rm -rf $RPM_BUILD_ROOT

%files
/usr/share/xfce4/helpers/flast-gecko-nightly.desktop

%changelog
* Sun Dec 27 2020 kokkiemouse <kokkiemouse@fascode.net> - 0.0.1
- Create Package