#
# spec file for package lightdm-webkit2-greeter
#
# Copyright © 2016-2017 Antergos Developers <dev@antergos.com>
#
# All modifications and additions to the file contributed by third parties
# remain the property of their copyright owners, unless otherwise agreed
# upon. The license for this file, and modifications and additions to the
# file, is the same license as for the pristine package itself (unless the
# license for the pristine package is not an Open Source License, in which
# case the license is the MIT License). An "Open Source License" is a
# license that conforms to the Open Source Definition (Version 1.9)
# published by the Open Source Initiative.

# Please submit bugfixes or comments via http://github.com/antergos/lightdm-webkit2-greeter/issues
#
Name:          lightdm-webkit2-greeter
Version:       2.2.5
Release:       1
Summary:       LightDM greeter that uses WebKit2 for theming via HTML/JavaScript
Group:         System/X11/Displaymanagers

License:       GPL-3.0+
URL:           http://github.com/antergos/lightdm-webkit2-greeter
Source0:       2.2.5.tar.gz

BuildRequires: gettext
BuildRequires: meson
BuildRequires: pkgconfig(gtk+-3.0)
BuildRequires: pkgconfig(webkit2gtk-4.0)
BuildRequires: pkgconfig(dbus-glib-1)
BuildRequires: pkgconfig(liblightdm-gobject-1)
BuildRequires: pkgconfig(x11)

%if %{defined suse_version}
Requires:      libwebkit2gtk-4_0-37
Requires:      libgtk-3-0
Requires:      liblightdm-gobject-1-0
%endif

%if %{defined fedora}
Requires:      webkitgtk4
Requires:      gtk3
Requires:      lightdm-gobject
%endif

Requires:      lightdm
Requires:      accountsservice

Requires(post):   /usr/sbin/update-alternatives
Requires(postun): /usr/sbin/update-alternatives

Provides:       lightdm-greeter
Provides:       lightdm-webkit-greeter
Conflicts:      lightdm-webkit-greeter
Obsoletes:      lightdm-webkit-greeter

%description

%prep
%setup -n web-greeter-%{version}


%build
cd build
CFLAGS='-DHAS_WEBKITGTK_2_14=1 -DHAS_WEBKITGTK_2_14_4=1' meson --prefix=/usr --libdir=%{_libdir} ..

%if %{defined fedora}
ninja-build
%else
ninja
%endif

%install
cd build
export DESTDIR=%{buildroot}

%if %{defined fedora}
ninja-build install
%else
ninja install
%endif

cd ..
%find_lang %{name}

%clean
rm -rf %{buildroot}

%post

%files -f %{name}.lang
%defattr(-,root,root,-)
%config(noreplace) /etc/lightdm/%{name}.conf

/etc/lightdm
/usr/bin/%{name}
/usr/lib/%{name}
/usr/lib/%{name}/*
/usr/share/lightdm-webkit
/usr/share/lightdm-webkit/*
/usr/share/man/man1/%{name}.1.gz
/usr/share/xgreeters/
/usr/share/xgreeters/%{name}.desktop


%changelog
* Sat Jan 06 2018 Dustin Falgout
- v2.2.5 Release Notes: https://goo.gl/P963kv
* Wed Jan 18 2017 Dustin Falgout
- v2.2.2 Release Notes: https://goo.gl/Hdy442
* Mon Dec 26 2016 Dustin Falgout
- v2.2.1 Release Notes: https://goo.gl/0K3BBG
* Mon Dec 19 2016 Dustin Falgout
- v2.2 Release Notes: https://goo.gl/iUIDK8
* Mon Oct 17 2016 Dustin Falgout
- v2.1.6 Release Notes: https://goo.gl/J28Zea
* Fri Oct 14 2016 Dustin Falgout
- v2.1.5 Release Notes: https://goo.gl/cUJLnI
* Fri Apr 29 2016 Dustin Falgout
- v2.1.4 Release Notes: https://goo.gl/h1Sjeo
* Sat Apr 16 2016 Dustin Falgout
- v2.1.3 Release Notes: https://goo.gl/ttffOJ
* Mon Apr 11 2016 Dustin Falgout
- v2.1.1 Release Notes: https://goo.gl/Unjbwd
* Mon Jan 11 2016 Dustin Falgout
- Cross-distro build.