
<!----Ref URL ---->
/*document.write('<input type="hidden" id="myref">');
document.getElementById("myref").src = "";
var ref_url = document.getElementById("myref").src;*/
var ref_url = document.referrer;

<!----End Ref URL  ---->

var unique_ID;
localStorage.setItem('persistent_ID', unique_ID);
console.log(localStorage.getItem('persistent_ID'));


<!----Cookie Start  ---->
var cookieName;
function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*3*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user=getCookie("username");
    if (user != "") {
      var repeted_user= cookieName+' repeted';
	  return repeted_user;
	   console.log(repeted_user);
    } else {
		
		v =document.getElementById('lolz');
       user = lolz.value;
       if (user != "" && user != null) {
           setCookie("username", user, 30);
       }
    }
}

document.write('<body onload="bodyload();">');
document.write('<input type="hidden" name="enter" class="enter" value="" id="lolz"/>');
document.getElementById('lolz').value = cookieName;
var repeted_cookie=checkCookie(); 

<!---- Cookie End --->

<!--   Canvas Start --->
function fingerprint_canvas() {
    "use strict";
    var strOnError, canvas, strCText, strText, strOut;
    strOnError = "Error";
    canvas = null;
    strCText = null;
    strText = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ`~1!2@3#4$5%6^7&8*9(0)-_=+[{]}|;:',<.>/?";
    strOut = null;
    try {
        canvas = document.createElement('canvas');
        strCText = canvas.getContext('2d');
        strCText.textBaseline = "top";
        strCText.font = "14px 'Arial'";
        strCText.textBaseline = "alphabetic";
        strCText.fillStyle = "#f60";
        strCText.fillRect(125, 1, 62, 20);
        strCText.fillStyle = "#069";
        strCText.fillText(strText, 2, 15);
        strCText.fillStyle = "rgba(102, 204, 0, 0.7)";
        strCText.fillText(strText, 4, 17);
        strOut = canvas.toDataURL();
		console.log(strOut);
        return strOut;
    } catch (err) {
        return strOnError;
		console.log(strOnError);
    }
}
//alert(fingerprint_canvas());
var fingerprint_data_full=fingerprint_canvas();
fingerprint_data = fingerprint_data_full.substring(0,500);
var fingerprint_data;
<!-- Canvas End -->
<!--  Font Fingerprint -->

function fingerprint_fonts() {

    var strOnError, style, fonts, count, template, fragment, divs, i, font, div, body, result, e;

    strOnError = "Error";
    style = null;
    fonts = null;
    font = null;
    count = 0;
    template = null;
    divs = null;
    e = null;
    div = null;
    body = null;
    i = 0;

    try {
        style = "position: absolute; visibility: hidden; display: block !important";
        fonts = ["Abadi MT Condensed Light", "Adobe Fangsong Std", "Adobe Hebrew", "Adobe Ming Std", "Agency FB", "Aharoni", "Andalus", "Angsana New", "AngsanaUPC", "Aparajita", "Arab", "Arabic Transparent", "Arabic Typesetting", "Arial Baltic", "Arial Black", "Arial CE", "Arial CYR", "Arial Greek", "Arial TUR", "Arial", "Batang", "BatangChe", "Bauhaus 93", "Bell MT", "Bitstream Vera Serif", "Bodoni MT", "Bookman Old Style", "Braggadocio", "Broadway", "Browallia New", "BrowalliaUPC", "Calibri Light", "Calibri", "Californian FB", "Cambria Math", "Cambria", "Candara", "Castellar", "Casual", "Centaur", "Century Gothic", "Chalkduster", "Colonna MT", "Comic Sans MS", "Consolas", "Constantia", "Copperplate Gothic Light", "Corbel", "Cordia New", "CordiaUPC", "Courier New Baltic", "Courier New CE", "Courier New CYR", "Courier New Greek", "Courier New TUR", "Courier New", "DFKai-SB", "DaunPenh", "David", "DejaVu LGC Sans Mono", "Desdemona", "DilleniaUPC", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Engravers MT", "Eras Bold ITC", "Estrangelo Edessa", "EucrosiaUPC", "Euphemia", "Eurostile", "FangSong", "Forte", "FrankRuehl", "Franklin Gothic Heavy", "Franklin Gothic Medium", "FreesiaUPC", "French Script MT", "Gabriola", "Gautami", "Georgia", "Gigi", "Gisha", "Goudy Old Style", "Gulim", "GulimChe", "GungSeo", "Gungsuh", "GungsuhChe", "Haettenschweiler", "Harrington", "Hei S", "HeiT", "Heisei Kaku Gothic", "Hiragino Sans GB", "Impact", "Informal Roman", "IrisUPC", "Iskoola Pota", "JasmineUPC", "KacstOne", "KaiTi", "Kalinga", "Kartika", "Khmer UI", "Kino MT", "KodchiangUPC", "Kokila", "Kozuka Gothic Pr6N", "Lao UI", "Latha", "Leelawadee", "Levenim MT", "LilyUPC", "Lohit Gujarati", "Loma", "Lucida Bright", "Lucida Console", "Lucida Fax", "Lucida Sans Unicode", "MS Gothic", "MS Mincho", "MS PGothic", "MS PMincho", "MS Reference Sans Serif", "MS UI Gothic", "MV Boli", "Magneto", "Malgun Gothic", "Mangal", "Marlett", "Matura MT Script Capitals", "Meiryo UI", "Meiryo", "Menlo", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Sans Serif", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU-ExtB", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "Miriam Fixed", "Miriam", "Mongolian Baiti", "MoolBoran", "NSimSun", "Narkisim", "News Gothic MT", "Niagara Solid", "Nyala", "PMingLiU", "PMingLiU-ExtB", "Palace Script MT", "Palatino Linotype", "Papyrus", "Perpetua", "Plantagenet Cherokee", "Playbill", "Prelude Bold", "Prelude Condensed Bold", "Prelude Condensed Medium", "Prelude Medium", "PreludeCompressedWGL Black", "PreludeCompressedWGL Bold", "PreludeCompressedWGL Light", "PreludeCompressedWGL Medium", "PreludeCondensedWGL Black", "PreludeCondensedWGL Bold", "PreludeCondensedWGL Light", "PreludeCondensedWGL Medium", "PreludeWGL Black", "PreludeWGL Bold", "PreludeWGL Light", "PreludeWGL Medium", "Raavi", "Rachana", "Rockwell", "Rod", "Sakkal Majalla", "Sawasdee", "Script MT Bold", "Segoe Print", "Segoe Script", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Segoe UI", "Shonar Bangla", "Showcard Gothic", "Shruti", "SimHei", "SimSun", "SimSun-ExtB", "Simplified Arabic Fixed", "Simplified Arabic", "Snap ITC", "Sylfaen", "Symbol", "Tahoma", "Times New Roman Baltic", "Times New Roman CE", "Times New Roman CYR", "Times New Roman Greek", "Times New Roman TUR", "Times New Roman", "TlwgMono", "Traditional Arabic", "Trebuchet MS", "Tunga", "Tw Cen MT Condensed Extra Bold", "Ubuntu", "Umpush", "Univers", "Utopia", "Utsaah", "Vani", "Verdana", "Vijaya", "Vladimir Script", "Vrinda", "Webdings", "Wide Latin", "Wingdings"];
        count = fonts.length;
        template = '<b style="display:inline !important; width:auto !important; font:normal 10px/1 \'X\',sans-serif !important">ww</b>' + '<b style="display:inline !important; width:auto !important; font:normal 10px/1 \'X\',monospace !important">ww</b>';
        fragment = document.createDocumentFragment();
        divs = [];
        for (i = 0; i < count; i = i + 1) {
            font = fonts[i];
            div = document.createElement('div');
            font = font.replace(/['"<>]/g, '');
            div.innerHTML = template.replace(/X/g, font);
            div.style.cssText = style;
            fragment.appendChild(div);
            divs.push(div);
        }
        body = document.body;
        body.insertBefore(fragment, body.firstChild);
        result = [];
        for (i = 0; i < count; i = i + 1) {
            e = divs[i].getElementsByTagName('b');
            if (e[0].offsetWidth === e[1].offsetWidth) {
                result.push(fonts[i]);
            }
        }
        // do not combine these two loops, remove child will cause reflow
        // and induce severe performance hit
        for (i = 0; i < count; i = i + 1) {
            body.removeChild(divs[i]);
			
			
        }
		console.log(result);
        return result.join('|');
    } catch (err) {
        return strOnError;
    }
}
//alert(fingerprint_fonts());
var fingerprint_fonts_data=fingerprint_fonts();
<!-- Font Fingerprint End -->>

<!--Browser Fingerprint -->

function fingerprint_browser() {
    "use strict";
    var strOnError, strUserAgent, numVersion, strBrowser, strOut;

    strOnError = "Error";
    strUserAgent = null;
    numVersion = null;
    strBrowser  = null;
    strOut = null;

    try {
        strUserAgent = navigator.userAgent.toLowerCase();
        if (/msie (\d+\.\d+);/.test(strUserAgent)) { //test for MSIE x.x;
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            if (strUserAgent.indexOf("trident/6") > -1) {
                numVersion = 10;
            }
            if (strUserAgent.indexOf("trident/5") > -1) {
                numVersion = 9;
            }
            if (strUserAgent.indexOf("trident/4") > -1) {
                numVersion = 8;
            }
            strBrowser = "Internet Explorer " + numVersion;
        } else if (strUserAgent.indexOf("trident/7") > -1) { //IE 11+ gets rid of the legacy 'MSIE' in the user-agent string;
            numVersion = 11;
            strBrowser = "Internet Explorer " + numVersion;
        }  else if (/firefox[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Firefox/x.x or Firefox x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Firefox " + numVersion;
        } else if (/opera[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Opera/x.x or Opera x.x (ignoring remaining decimal places);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Opera " + numVersion;
        } else if (/chrome[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Chrome/x.x or Chrome x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Chrome " + numVersion;
        } else if (/version[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Version/x.x or Version x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Safari " + numVersion;
        } else if (/rv[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for rv/x.x or rv x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Mozilla " + numVersion;
        } else if (/mozilla[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Mozilla/x.x or Mozilla x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Mozilla " + numVersion;
        } else if (/binget[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for BinGet/x.x or BinGet x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (BinGet) " + numVersion;
        } else if (/curl[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Curl/x.x or Curl x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (cURL) " + numVersion;
        } else if (/java[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Java/x.x or Java x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (Java) " + numVersion;
        } else if (/libwww-perl[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for libwww-perl/x.x or libwww-perl x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (libwww-perl) " + numVersion;
        } else if (/microsoft url control -[\s](\d+\.\d+)/.test(strUserAgent)) { //test for Microsoft URL Control - x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (Microsoft URL Control) " + numVersion;
        } else if (/peach[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for Peach/x.x or Peach x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (Peach) " + numVersion;
        } else if (/php[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for PHP/x.x or PHP x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (PHP) " + numVersion;
        } else if (/pxyscand[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for pxyscand/x.x or pxyscand x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (pxyscand) " + numVersion;
        } else if (/pycurl[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for pycurl/x.x or pycurl x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (PycURL) " + numVersion;
        } else if (/python-urllib[\/\s](\d+\.\d+)/.test(strUserAgent)) { //test for python-urllib/x.x or python-urllib x.x (ignoring remaining digits);
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Library (Python URLlib) " + numVersion;
        } else if (/appengine-google/.test(strUserAgent)) { //test for AppEngine-Google;
            numVersion = Number(RegExp.$1); // capture x.x portion and store as a number
            strBrowser = "Cloud (Google AppEngine) " + numVersion;
        } else {
            strBrowser = "Unknown";
        }
        strOut = strBrowser;
		console.log(strOut);
        return strOut;
    } catch (err) {
        return strOnError;
    }
}

var browser=fingerprint_browser();
//alert(browser);
<!--End Browser Fingerprint -->

<!--OS Fingerprint -->
function fingerprint_os() {
    "use strict";
    var strSep, strOnError, strUserAgent, strPlatform, strOS, strOSBits, strOut;

    strSep = "|";
    strOnError = "Error";
    strUserAgent = null;
    strPlatform = null;
    strOS = null;
    strOSBits = null;
    strOut = null;

    try {
        /* navigator.userAgent is supported by all major browsers */
        strUserAgent = navigator.userAgent.toLowerCase();
        /* navigator.platform is supported by all major browsers */
        strPlatform = navigator.platform.toLowerCase();
        if (strUserAgent.indexOf("windows nt 6.3") !== -1) {
            strOS = "Windows 8.1";
        } else if (strUserAgent.indexOf("windows nt 6.2") !== -1) {
            strOS = "Windows 8";
        } else if (strUserAgent.indexOf("windows nt 6.1") !== -1) {
            strOS = "Windows 7";
        } else if (strUserAgent.indexOf("windows nt 6.0") !== -1) {
            strOS = "Windows Vista/Windows Server 2008";
        } else if (strUserAgent.indexOf("windows nt 5.2") !== -1) {
            strOS = "Windows XP x64/Windows Server 2003";
        } else if (strUserAgent.indexOf("windows nt 5.1") !== -1) {
            strOS = "Windows XP";
        } else if (strUserAgent.indexOf("windows nt 5.01") !== -1) {
            strOS = "Windows 2000, Service Pack 1 (SP1)";
        } else if (strUserAgent.indexOf("windows xp") !== -1) {
            strOS = "Windows XP";
        } else if (strUserAgent.indexOf("windows 2000") !== -1) {
            strOS = "Windows 2000";
        } else if (strUserAgent.indexOf("windows nt 5.0") !== -1) {
            strOS = "Windows 2000";
        } else if (strUserAgent.indexOf("windows nt 4.0") !== -1) {
            strOS = "Windows NT 4.0";
        } else if (strUserAgent.indexOf("windows nt") !== -1) {
            strOS = "Windows NT 4.0";
        } else if (strUserAgent.indexOf("winnt4.0") !== -1) {
            strOS = "Windows NT 4.0";
        } else if (strUserAgent.indexOf("winnt") !== -1) {
            strOS = "Windows NT 4.0";
        } else if (strUserAgent.indexOf("windows me") !== -1) {
            strOS = "Windows ME";
        } else if (strUserAgent.indexOf("win 9x 4.90") !== -1) {
            strOS = "Windows ME";
        } else if (strUserAgent.indexOf("windows 98") !== -1) {
            strOS = "Windows 98";
        } else if (strUserAgent.indexOf("win98") !== -1) {
            strOS = "Windows 98";
        } else if (strUserAgent.indexOf("windows 95") !== -1) {
            strOS = "Windows 95";
        } else if (strUserAgent.indexOf("windows_95") !== -1) {
            strOS = "Windows 95";
        } else if (strUserAgent.indexOf("win95") !== -1) {
            strOS = "Windows 95";
        } else if (strUserAgent.indexOf("ce") !== -1) {
            strOS = "Windows CE";
        } else if (strUserAgent.indexOf("win16") !== -1) {
            strOS = "Windows 3.11";
        } else if (strUserAgent.indexOf("iemobile") !== -1) {
            strOS = "Windows Mobile";
        } else if (strUserAgent.indexOf("wm5 pie") !== -1) {
            strOS = "Windows Mobile";
        } else if (strUserAgent.indexOf("windows") !== -1) {
            strOS = "Windows (Unknown Version)";
        } else if (strUserAgent.indexOf("openbsd") !== -1) {
            strOS = "Open BSD";
        } else if (strUserAgent.indexOf("sunos") !== -1) {
            strOS = "Sun OS";
        } else if (strUserAgent.indexOf("ubuntu") !== -1) {
            strOS = "Ubuntu";
        } else if (strUserAgent.indexOf("ipad") !== -1) {
            strOS = "iOS (iPad)";
        } else if (strUserAgent.indexOf("ipod") !== -1) {
            strOS = "iOS (iTouch)";
        } else if (strUserAgent.indexOf("iphone") !== -1) {
            strOS = "iOS (iPhone)";
        } else if (strUserAgent.indexOf("mac os x beta") !== -1) {
            strOS = "Mac OSX Beta (Kodiak)";
        } else if (strUserAgent.indexOf("mac os x 10.0") !== -1) {
            strOS = "Mac OSX Cheetah";
        } else if (strUserAgent.indexOf("mac os x 10.1") !== -1) {
            strOS = "Mac OSX Puma";
        } else if (strUserAgent.indexOf("mac os x 10.2") !== -1) {
            strOS = "Mac OSX Jaguar";
        } else if (strUserAgent.indexOf("mac os x 10.3") !== -1) {
            strOS = "Mac OSX Panther";
        } else if (strUserAgent.indexOf("mac os x 10.4") !== -1) {
            strOS = "Mac OSX Tiger";
        } else if (strUserAgent.indexOf("mac os x 10.5") !== -1) {
            strOS = "Mac OSX Leopard";
        } else if (strUserAgent.indexOf("mac os x 10.6") !== -1) {
            strOS = "Mac OSX Snow Leopard";
        } else if (strUserAgent.indexOf("mac os x 10.7") !== -1) {
            strOS = "Mac OSX Lion";
        } else if (strUserAgent.indexOf("mac os x") !== -1) {
            strOS = "Mac OSX (Version Unknown)";
        } else if (strUserAgent.indexOf("mac_68000") !== -1) {
            strOS = "Mac OS Classic (68000)";
        } else if (strUserAgent.indexOf("68K") !== -1) {
            strOS = "Mac OS Classic (68000)";
        } else if (strUserAgent.indexOf("mac_powerpc") !== -1) {
            strOS = "Mac OS Classic (PowerPC)";
        } else if (strUserAgent.indexOf("ppc mac") !== -1) {
            strOS = "Mac OS Classic (PowerPC)";
        } else if (strUserAgent.indexOf("macintosh") !== -1) {
            strOS = "Mac OS Classic";
        } else if (strUserAgent.indexOf("googletv") !== -1) {
            strOS = "Android (GoogleTV)";
        } else if (strUserAgent.indexOf("xoom") !== -1) {
            strOS = "Android (Xoom)";
        } else if (strUserAgent.indexOf("htc_flyer") !== -1) {
            strOS = "Android (HTC Flyer)";
        } else if (strUserAgent.indexOf("android") !== -1) {
            strOS = "Android";
        } else if (strUserAgent.indexOf("symbian") !== -1) {
            strOS = "Symbian";
        } else if (strUserAgent.indexOf("series60") !== -1) {
            strOS = "Symbian (Series 60)";
        } else if (strUserAgent.indexOf("series70") !== -1) {
            strOS = "Symbian (Series 70)";
        } else if (strUserAgent.indexOf("series80") !== -1) {
            strOS = "Symbian (Series 80)";
        } else if (strUserAgent.indexOf("series90") !== -1) {
            strOS = "Symbian (Series 90)";
        } else if (strUserAgent.indexOf("x11") !== -1) {
            strOS = "UNIX";
        } else if (strUserAgent.indexOf("nix") !== -1) {
            strOS = "UNIX";
        } else if (strUserAgent.indexOf("linux") !== -1) {
            strOS = "Linux";
        } else if (strUserAgent.indexOf("qnx") !== -1) {
            strOS = "QNX";
        } else if (strUserAgent.indexOf("os/2") !== -1) {
            strOS = "IBM OS/2";
        } else if (strUserAgent.indexOf("beos") !== -1) {
            strOS = "BeOS";
        } else if (strUserAgent.indexOf("blackberry95") !== -1) {
            strOS = "Blackberry (Storm 1/2)";
        } else if (strUserAgent.indexOf("blackberry97") !== -1) {
            strOS = "Blackberry (Bold)";
        } else if (strUserAgent.indexOf("blackberry96") !== -1) {
            strOS = "Blackberry (Tour)";
        } else if (strUserAgent.indexOf("blackberry89") !== -1) {
            strOS = "Blackberry (Curve 2)";
        } else if (strUserAgent.indexOf("blackberry98") !== -1) {
            strOS = "Blackberry (Torch)";
        } else if (strUserAgent.indexOf("playbook") !== -1) {
            strOS = "Blackberry (Playbook)";
        } else if (strUserAgent.indexOf("wnd.rim") !== -1) {
            strOS = "Blackberry (IE/FF Emulator)";
        } else if (strUserAgent.indexOf("blackberry") !== -1) {
            strOS = "Blackberry";
        } else if (strUserAgent.indexOf("palm") !== -1) {
            strOS = "Palm OS";
        } else if (strUserAgent.indexOf("webos") !== -1) {
            strOS = "WebOS";
        } else if (strUserAgent.indexOf("hpwos") !== -1) {
            strOS = "WebOS (HP)";
        } else if (strUserAgent.indexOf("blazer") !== -1) {
            strOS = "Palm OS (Blazer)";
        } else if (strUserAgent.indexOf("xiino") !== -1) {
            strOS = "Palm OS (Xiino)";
        } else if (strUserAgent.indexOf("kindle") !== -1) {
            strOS = "Kindle";
        } else if (strUserAgent.indexOf("wii") !== -1) {
            strOS = "Nintendo (Wii)";
        } else if (strUserAgent.indexOf("nintendo ds") !== -1) {
            strOS = "Nintendo (DS)";
        } else if (strUserAgent.indexOf("playstation 3") !== -1) {
            strOS = "Sony (Playstation Console)";
        } else if (strUserAgent.indexOf("playstation portable") !== -1) {
            strOS = "Sony (Playstation Portable)";
        } else if (strUserAgent.indexOf("webtv") !== -1) {
            strOS = "MSN TV (WebTV)";
        } else if (strUserAgent.indexOf("inferno") !== -1) {
            strOS = "Inferno";
        } else {
            strOS = "Unknown";
        }
        if (strPlatform.indexOf("x64") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("wow64") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("win64") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("win32") !== -1) {
            strOSBits = "32 bits";
        } else if (strPlatform.indexOf("x64") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("x32") !== -1) {
            strOSBits = "32 bits";
        } else if (strPlatform.indexOf("x86") !== -1) {
            strOSBits = "32 bits*";
        } else if (strPlatform.indexOf("ppc") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("alpha") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("68k") !== -1) {
            strOSBits = "64 bits";
        } else if (strPlatform.indexOf("iphone") !== -1) {
            strOSBits = "32 bits";
        } else if (strPlatform.indexOf("android") !== -1) {
            strOSBits = "32 bits";
        } else {
            strOSBits = "Unknown";
        }
        strOut = strOS + strSep + strOSBits;
		console.log(strOut);
        return strOut;
    } catch (err) {
        return strOnError;
    }
}
var os=fingerprint_os();
//alert(os);
<!-- End Os Fingerprint -->

<!-- Display Fingerprint -->
function fingerprint_display() {
    "use strict";
    var strSep, strPair, strOnError, strScreen, strDisplay, strOut;

    strSep = "|";
    strPair = "=";
    strOnError = "Error";
    strScreen = null;
    strDisplay = null;
    strOut = null;

    try {
        strScreen = window.screen;
        if (strScreen) {
            strDisplay = strScreen.colorDepth + strSep + strScreen.width + strSep + strScreen.height + strSep + strScreen.availWidth + strSep + strScreen.availHeight;
        }
        strOut = strDisplay;
		console.log(strOut);
        return strOut;
    } catch (err) {
        return strOnError;
    }
}
var display=fingerprint_display();
//alert(display);
<!-- End Display Fingerprint -->

<!-- Latency Fingerprint -->
function fingerprint_latency() {
    "use strict";
    var perfData, dns, connection, requestTime, networkLatency;

    perfData = null;
    dns = null;
    connection = null;
    requestTime = null;
    networkLatency = null;

    try {
	   // supported by a number of modern browsers
       perfData = window.performance.timing;
       requestTime = perfData.responseStart - perfData.requestStart;
       networkLatency = perfData.responseEnd - perfData.fetchStart;
       return requestTime + "|" + networkLatency;
    } catch (err) {
        return "Unknown";
    }
}
var latency=fingerprint_latency();
//alert(latency);
<!--- End Latency Fingerprint  -->

<!-- Check Cookie Enable cookie fingerprint -->
function fingerprint_cookie() {
    "use strict";
    var strOnError, bolCookieEnabled, bolOut;

    strOnError = "Error";
    bolCookieEnabled = null;
    bolOut = null;

    try {
        bolCookieEnabled = (navigator.cookieEnabled) ? true : false;

        //if not IE4+ nor NS6+
        if (typeof navigator.cookieEnabled === "undefined" && !bolCookieEnabled) {
            document.cookie = "testcookie";
            bolCookieEnabled = (document.cookie.indexOf("testcookie") !== -1) ? true : false;
        }
        bolOut = bolCookieEnabled;
        return bolOut;
    } catch (err) {
        return strOnError;
    }
}
var cookie_chk=fingerprint_cookie();
//alert(cookie_chk);
<!-- EndCheck Cookie Enable cookie fingerprint -->

<!-- start swfobject for flash  -->
var swfobject = function () {
        var D = "undefined",
            r = "object",
            S = "Shockwave Flash",
            W = "ShockwaveFlash.ShockwaveFlash",
            q = "application/x-shockwave-flash",
            R = "SWFObjectExprInst",
            x = "onreadystatechange",
            O = window,
            j = document,
            t = navigator,
            T = false,
            U = [h],
            o = [],
            N = [],
            I = [],
            l, Q, E, B, J = false,
            a = false,
            n, G, m = true,
            M = function () {
                var aa = typeof j.getElementById != D && typeof j.getElementsByTagName != D && typeof j.createElement != D,
                    ah = t.userAgent.toLowerCase(),
                    Y = t.platform.toLowerCase(),
                    ae = Y ? /win/.test(Y) : /win/.test(ah),
                    ac = Y ? /mac/.test(Y) : /mac/.test(ah),
                    af = /webkit/.test(ah) ? parseFloat(ah.replace(/^.*webkit\/(\d+(\.\d+)?).*$/, "$1")) : false,
                    X = !+"\v1",
                    ag = [0, 0, 0],
                    ab = null;
                if(typeof t.plugins != D && typeof t.plugins[S] == r) {
                    ab = t.plugins[S].description;
                    if(ab && !(typeof t.mimeTypes != D && t.mimeTypes[q] && !t.mimeTypes[q].enabledPlugin)) {
                        T = true;
                        X = false;
                        ab = ab.replace(/^.*\s+(\S+\s+\S+$)/, "$1");
                        ag[0] = parseInt(ab.replace(/^(.*)\..*$/, "$1"), 10);
                        ag[1] = parseInt(ab.replace(/^.*\.(.*)\s.*$/, "$1"), 10);
                        ag[2] = /[a-zA-Z]/.test(ab) ? parseInt(ab.replace(/^.*[a-zA-Z]+(.*)$/, "$1"), 10) : 0
                    }
                } else {
                    if(typeof O.ActiveXObject != D) {
                        try {
                            var ad = new ActiveXObject(W);
                            if(ad) {
                                ab = ad.GetVariable("$version");
                                if(ab) {
                                    X = true;
                                    ab = ab.split(" ")[1].split(",");
                                    ag = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                                }
                            }
                        } catch(Z) {}
                    }
                }
                return {
                    w3: aa,
                    pv: ag,
                    wk: af,
                    ie: X,
                    win: ae,
                    mac: ac
                }
            }(),
            k = function () {
                if(!M.w3) {
                    return
                }
                if((typeof j.readyState != D && j.readyState == "complete") || (typeof j.readyState == D && (j.getElementsByTagName("body")[0] || j.body))) {
                    f()
                }
                if(!J) {
                    if(typeof j.addEventListener != D) {
                        j.addEventListener("DOMContentLoaded", f, false)
                    }
                    if(M.ie && M.win) {
                        j.attachEvent(x, function () {
                            if(j.readyState == "complete") {
                                j.detachEvent(x, arguments.callee);
                                f()
                            }
                        });
                        if(O == top) {
                            (function () {
                                if(J) {
                                    return
                                }
                                try {
                                    j.documentElement.doScroll("left")
                                } catch(X) {
                                    setTimeout(arguments.callee, 0);
                                    return
                                }
                                f()
                            })()
                        }
                    }
                    if(M.wk) {
                        (function () {
                            if(J) {
                                return
                            }
                            if(!/loaded|complete/.test(j.readyState)) {
                                setTimeout(arguments.callee, 0);
                                return
                            }
                            f()
                        })()
                    }
                    s(f)
                }
            }();

        function f() {
            if(J) {
                return
            }
            try {
                var Z = j.getElementsByTagName("body")[0].appendChild(C("span"));
                Z.parentNode.removeChild(Z)
            } catch(aa) {
                return
            }
            J = true;
            var X = U.length;
            for(var Y = 0; Y < X; Y++) {
                U[Y]()
            }
        }
        function K(X) {
            if(J) {
                X()
            } else {
                U[U.length] = X
            }
        }
        function s(Y) {
            if(typeof O.addEventListener != D) {
                O.addEventListener("load", Y, false)
            } else {
                if(typeof j.addEventListener != D) {
                    j.addEventListener("load", Y, false)
                } else {
                    if(typeof O.attachEvent != D) {
                        i(O, "onload", Y)
                    } else {
                        if(typeof O.onload == "function") {
                            var X = O.onload;
                            O.onload = function () {
                                X();
                                Y()
                            }
                        } else {
                            O.onload = Y
                        }
                    }
                }
            }
        }
        function h() {
            if(T) {
                V()
            } else {
                H()
            }
        }
        function V() {
            var X = j.getElementsByTagName("body")[0];
            var aa = C(r);
            aa.setAttribute("type", q);
            var Z = X.appendChild(aa);
            if(Z) {
                var Y = 0;
                (function () {
                    if(typeof Z.GetVariable != D) {
                        var ab = Z.GetVariable("$version");
                        if(ab) {
                            ab = ab.split(" ")[1].split(",");
                            M.pv = [parseInt(ab[0], 10), parseInt(ab[1], 10), parseInt(ab[2], 10)]
                        }
                    } else {
                        if(Y < 10) {
                            Y++;
                            setTimeout(arguments.callee, 10);
                            return
                        }
                    }
                    X.removeChild(aa);
                    Z = null;
                    H()
                })()
            } else {
                H()
            }
        }
        function H() {
            var ag = o.length;
            if(ag > 0) {
                for(var af = 0; af < ag; af++) {
                    var Y = o[af].id;
                    var ab = o[af].callbackFn;
                    var aa = {
                        success: false,
                        id: Y
                    };
                    if(M.pv[0] > 0) {
                        var ae = c(Y);
                        if(ae) {
                            if(F(o[af].swfVersion) && !(M.wk && M.wk < 312)) {
                                w(Y, true);
                                if(ab) {
                                    aa.success = true;
                                    aa.ref = z(Y);
                                    ab(aa)
                                }
                            } else {
                                if(o[af].expressInstall && A()) {
                                    var ai = {};
                                    ai.data = o[af].expressInstall;
                                    ai.width = ae.getAttribute("width") || "0";
                                    ai.height = ae.getAttribute("height") || "0";
                                    if(ae.getAttribute("class")) {
                                        ai.styleclass = ae.getAttribute("class")
                                    }
                                    if(ae.getAttribute("align")) {
                                        ai.align = ae.getAttribute("align")
                                    }
                                    var ah = {};
                                    var X = ae.getElementsByTagName("param");
                                    var ac = X.length;
                                    for(var ad = 0; ad < ac; ad++) {
                                        if(X[ad].getAttribute("name").toLowerCase() != "movie") {
                                            ah[X[ad].getAttribute("name")] = X[ad].getAttribute("value")
                                        }
                                    }
                                    P(ai, ah, Y, ab)
                                } else {
                                    p(ae);
                                    if(ab) {
                                        ab(aa)
                                    }
                                }
                            }
                        }
                    } else {
                        w(Y, true);
                        if(ab) {
                            var Z = z(Y);
                            if(Z && typeof Z.SetVariable != D) {
                                aa.success = true;
                                aa.ref = Z
                            }
                            ab(aa)
                        }
                    }
                }
            }
        }
        function z(aa) {
            var X = null;
            var Y = c(aa);
            if(Y && Y.nodeName == "OBJECT") {
                if(typeof Y.SetVariable != D) {
                    X = Y
                } else {
                    var Z = Y.getElementsByTagName(r)[0];
                    if(Z) {
                        X = Z
                    }
                }
            }
            return X
        }
        function A() {
            return !a && F("6.0.65") && (M.win || M.mac) && !(M.wk && M.wk < 312)
        }
        function P(aa, ab, X, Z) {
            a = true;
            E = Z || null;
            B = {
                success: false,
                id: X
            };
            var ae = c(X);
            if(ae) {
                if(ae.nodeName == "OBJECT") {
                    l = g(ae);
                    Q = null
                } else {
                    l = ae;
                    Q = X
                }
                aa.id = R;
                if(typeof aa.width == D || (!/%$/.test(aa.width) && parseInt(aa.width, 10) < 310)) {
                    aa.width = "310"
                }
                if(typeof aa.height == D || (!/%$/.test(aa.height) && parseInt(aa.height, 10) < 137)) {
                    aa.height = "137"
                }
                j.title = j.title.slice(0, 47) + " - Flash Player Installation";
                var ad = M.ie && M.win ? "ActiveX" : "PlugIn",
                    ac = "MMredirectURL=" + O.location.toString().replace(/&/g, "%26") + "&MMplayerType=" + ad + "&MMdoctitle=" + j.title;
                if(typeof ab.flashvars != D) {
                    ab.flashvars += "&" + ac
                } else {
                    ab.flashvars = ac
                }
                if(M.ie && M.win && ae.readyState != 4) {
                    var Y = C("div");
                    X += "SWFObjectNew";
                    Y.setAttribute("id", X);
                    ae.parentNode.insertBefore(Y, ae);
                    ae.style.display = "none";
                    (function () {
                        if(ae.readyState == 4) {
                            ae.parentNode.removeChild(ae)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                }
                u(aa, ab, X)
            }
        }
        function p(Y) {
            if(M.ie && M.win && Y.readyState != 4) {
                var X = C("div");
                Y.parentNode.insertBefore(X, Y);
                X.parentNode.replaceChild(g(Y), X);
                Y.style.display = "none";
                (function () {
                    if(Y.readyState == 4) {
                        Y.parentNode.removeChild(Y)
                    } else {
                        setTimeout(arguments.callee, 10)
                    }
                })()
            } else {
                Y.parentNode.replaceChild(g(Y), Y)
            }
        }
        function g(ab) {
            var aa = C("div");
            if(M.win && M.ie) {
                aa.innerHTML = ab.innerHTML
            } else {
                var Y = ab.getElementsByTagName(r)[0];
                if(Y) {
                    var ad = Y.childNodes;
                    if(ad) {
                        var X = ad.length;
                        for(var Z = 0; Z < X; Z++) {
                            if(!(ad[Z].nodeType == 1 && ad[Z].nodeName == "PARAM") && !(ad[Z].nodeType == 8)) {
                                aa.appendChild(ad[Z].cloneNode(true))
                            }
                        }
                    }
                }
            }
            return aa
        }
        function u(ai, ag, Y) {
            var X, aa = c(Y);
            if(M.wk && M.wk < 312) {
                return X
            }
            if(aa) {
                if(typeof ai.id == D) {
                    ai.id = Y
                }
                if(M.ie && M.win) {
                    var ah = "";
                    for(var ae in ai) {
                        if(ai[ae] != Object.prototype[ae]) {
                            if(ae.toLowerCase() == "data") {
                                ag.movie = ai[ae]
                            } else {
                                if(ae.toLowerCase() == "styleclass") {
                                    ah += ' class="' + ai[ae] + '"'
                                } else {
                                    if(ae.toLowerCase() != "classid") {
                                        ah += " " + ae + '="' + ai[ae] + '"'
                                    }
                                }
                            }
                        }
                    }
                    var af = "";
                    for(var ad in ag) {
                        if(ag[ad] != Object.prototype[ad]) {
                            af += '<param name="' + ad + '" value="' + ag[ad] + '" />'
                        }
                    }
                    aa.outerHTML = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"' + ah + ">" + af + "</object>";
                    N[N.length] = ai.id;
                    X = c(ai.id)
                } else {
                    var Z = C(r);
                    Z.setAttribute("type", q);
                    for(var ac in ai) {
                        if(ai[ac] != Object.prototype[ac]) {
                            if(ac.toLowerCase() == "styleclass") {
                                Z.setAttribute("class", ai[ac])
                            } else {
                                if(ac.toLowerCase() != "classid") {
                                    Z.setAttribute(ac, ai[ac])
                                }
                            }
                        }
                    }
                    for(var ab in ag) {
                        if(ag[ab] != Object.prototype[ab] && ab.toLowerCase() != "movie") {
                            e(Z, ab, ag[ab])
                        }
                    }
                    aa.parentNode.replaceChild(Z, aa);
                    X = Z
                }
            }
            return X
        }
        function e(Z, X, Y) {
            var aa = C("param");
            aa.setAttribute("name", X);
            aa.setAttribute("value", Y);
            Z.appendChild(aa)
        }
        function y(Y) {
            var X = c(Y);
            if(X && X.nodeName == "OBJECT") {
                if(M.ie && M.win) {
                    X.style.display = "none";
                    (function () {
                        if(X.readyState == 4) {
                            b(Y)
                        } else {
                            setTimeout(arguments.callee, 10)
                        }
                    })()
                } else {
                    X.parentNode.removeChild(X)
                }
            }
        }
        function b(Z) {
            var Y = c(Z);
            if(Y) {
                for(var X in Y) {
                    if(typeof Y[X] == "function") {
                        Y[X] = null
                    }
                }
                Y.parentNode.removeChild(Y)
            }
        }
        function c(Z) {
            var X = null;
            try {
                X = j.getElementById(Z)
            } catch(Y) {}
            return X
        }
        function C(X) {
            return j.createElement(X)
        }
        function i(Z, X, Y) {
            Z.attachEvent(X, Y);
            I[I.length] = [Z, X, Y]
        }
        function F(Z) {
            var Y = M.pv,
                X = Z.split(".");
            X[0] = parseInt(X[0], 10);
            X[1] = parseInt(X[1], 10) || 0;
            X[2] = parseInt(X[2], 10) || 0;
            return(Y[0] > X[0] || (Y[0] == X[0] && Y[1] > X[1]) || (Y[0] == X[0] && Y[1] == X[1] && Y[2] >= X[2])) ? true : false
        }
        function v(ac, Y, ad, ab) {
            if(M.ie && M.mac) {
                return
            }
            var aa = j.getElementsByTagName("head")[0];
            if(!aa) {
                return
            }
            var X = (ad && typeof ad == "string") ? ad : "screen";
            if(ab) {
                n = null;
                G = null
            }
            if(!n || G != X) {
                var Z = C("style");
                Z.setAttribute("type", "text/css");
                Z.setAttribute("media", X);
                n = aa.appendChild(Z);
                if(M.ie && M.win && typeof j.styleSheets != D && j.styleSheets.length > 0) {
                    n = j.styleSheets[j.styleSheets.length - 1]
                }
                G = X
            }
            if(M.ie && M.win) {
                if(n && typeof n.addRule == r) {
                    n.addRule(ac, Y)
                }
            } else {
                if(n && typeof j.createTextNode != D) {
                    n.appendChild(j.createTextNode(ac + " {" + Y + "}"))
                }
            }
        }
        function w(Z, X) {
            if(!m) {
                return
            }
            var Y = X ? "visible" : "hidden";
            if(J && c(Z)) {
                c(Z).style.visibility = Y
            } else {
                v("#" + Z, "visibility:" + Y)
            }
        }
        function L(Y) {
            var Z = /[\\\"<>\.;]/;
            var X = Z.exec(Y) != null;
            return X && typeof encodeURIComponent != D ? encodeURIComponent(Y) : Y
        }
        var d = function () {
                if(M.ie && M.win) {
                    window.attachEvent("onunload", function () {
                        var ac = I.length;
                        for(var ab = 0; ab < ac; ab++) {
                            I[ab][0].detachEvent(I[ab][1], I[ab][2])
                        }
                        var Z = N.length;
                        for(var aa = 0; aa < Z; aa++) {
                            y(N[aa])
                        }
                        for(var Y in M) {
                            M[Y] = null
                        }
                        M = null;
                        for(var X in swfobject) {
                            swfobject[X] = null
                        }
                        swfobject = null
                    })
                }
            }();
        return {
            registerObject: function (ab, X, aa, Z) {
                if(M.w3 && ab && X) {
                    var Y = {};
                    Y.id = ab;
                    Y.swfVersion = X;
                    Y.expressInstall = aa;
                    Y.callbackFn = Z;
                    o[o.length] = Y;
                    w(ab, false)
                } else {
                    if(Z) {
                        Z({
                            success: false,
                            id: ab
                        })
                    }
                }
            },
            getObjectById: function (X) {
                if(M.w3) {
                    return z(X)
                }
            },
            embedSWF: function (ab, ah, ae, ag, Y, aa, Z, ad, af, ac) {
                var X = {
                    success: false,
                    id: ah
                };
                if(M.w3 && !(M.wk && M.wk < 312) && ab && ah && ae && ag && Y) {
                    w(ah, false);
                    K(function () {
                        ae += "";
                        ag += "";
                        var aj = {};
                        if(af && typeof af === r) {
                            for(var al in af) {
                                aj[al] = af[al]
                            }
                        }
                        aj.data = ab;
                        aj.width = ae;
                        aj.height = ag;
                        var am = {};
                        if(ad && typeof ad === r) {
                            for(var ak in ad) {
                                am[ak] = ad[ak]
                            }
                        }
                        if(Z && typeof Z === r) {
                            for(var ai in Z) {
                                if(typeof am.flashvars != D) {
                                    am.flashvars += "&" + ai + "=" + Z[ai]
                                } else {
                                    am.flashvars = ai + "=" + Z[ai]
                                }
                            }
                        }
                        if(F(Y)) {
                            var an = u(aj, am, ah);
                            if(aj.id == ah) {
                                w(ah, true)
                            }
                            X.success = true;
                            X.ref = an
                        } else {
                            if(aa && A()) {
                                aj.data = aa;
                                P(aj, am, ah, ac);
                                return
                            } else {
                                w(ah, true)
                            }
                        }
                        if(ac) {
                            ac(X)
                        }
                    })
                } else {
                    if(ac) {
                        ac(X)
                    }
                }
            },
            switchOffAutoHideShow: function () {
                m = false
            },
            ua: M,
            getFlashPlayerVersion: function () {
                return {
                    major: M.pv[0],
                    minor: M.pv[1],
                    release: M.pv[2]
                }
            },
            hasFlashPlayerVersion: F,
            createSWF: function (Z, Y, X) {
                if(M.w3) {
                    return u(Z, Y, X)
                } else {
                    return undefined
                }
            },
            showExpressInstall: function (Z, aa, X, Y) {
                if(M.w3 && A()) {
                    P(Z, aa, X, Y)
                }
            },
            removeSWF: function (X) {
                if(M.w3) {
                    y(X)
                }
            },
            createCSS: function (aa, Z, Y, X) {
                if(M.w3) {
                    v(aa, Z, Y, X)
                }
            },
            addDomLoadEvent: K,
            addLoadEvent: s,
            getQueryParamValue: function (aa) {
                var Z = j.location.search || j.location.hash;
                if(Z) {
                    if(/\?/.test(Z)) {
                        Z = Z.split("?")[1]
                    }
                    if(aa == null) {
                        return L(Z)
                    }
                    var Y = Z.split("&");
                    for(var X = 0; X < Y.length; X++) {
                        if(Y[X].substring(0, Y[X].indexOf("=")) == aa) {
                            return L(Y[X].substring((Y[X].indexOf("=") + 1)))
                        }
                    }
                }
                return ""
            },
            expressInstallCallback: function () {
                if(a) {
                    var X = c(R);
                    if(X && l) {
                        X.parentNode.replaceChild(l, X);
                        if(Q) {
                            w(Q, true);
                            if(M.ie && M.win) {
                                l.style.display = "block"
                            }
                        }
                        if(E) {
                            E(B)
                        }
                    }
                    a = false
                }
            }
        }
    }();

<!-- End swfobject for flash -->


<!-- Flas fingerprint -->
function fingerprint_flash() {
    "use strict";
    var strOnError, objPlayerVersion, strVersion, strOut;

    strOnError = "Error";
    objPlayerVersion = null;
    strVersion = null;
    strOut = null;

    try {
        objPlayerVersion = swfobject.getFlashPlayerVersion();
        strVersion = objPlayerVersion.major + "." + objPlayerVersion.minor + "." + objPlayerVersion.release;
        if (strVersion === "0.0.0") {
            strVersion = "N/A";
        }
        strOut = strVersion;
		console.log(strOut);
        return strOut;
    } catch (err) {
        return strOnError;
    }
}
var flash=fingerprint_flash();
<!-- End Flas fingerprint -->

<!-- Java Enable fingerprint -->
function fingerprint_java() {
    "use strict";
    var strOnError, strJavaEnabled, strOut;

    strOnError = "Error";
    strJavaEnabled = null;
    strOut = null;

    try {
        if (navigator.javaEnabled()) {
            strJavaEnabled = "true";
        } else {
            strJavaEnabled = "false";
        }
        strOut = strJavaEnabled;
		console.log(strOut);
        return strOut;
    } catch (err) {
        return strOnError;
    }
}
var java=fingerprint_java();
<!-- End Java Enable fingerprint -->

<!-- Time Zone fingerprint -->
function fingerprint_timezone() {
    "use strict";
    var strOnError, dtDate, numOffset, numGMTHours, numOut;

    strOnError = "Error";
    dtDate = null;
    numOffset = null;
    numGMTHours = null;
    numOut = null;

    try {
        dtDate = new Date();
        numOffset = dtDate.getTimezoneOffset();
        numGMTHours = (numOffset / 60) * (-1);
        numOut = numGMTHours;
		console.log(numOut);
        return numOut;
    } catch (err) {
        return strOnError;
    }
}
var timezone=fingerprint_timezone();
<!-- End Time Zone fingerprint -->


<!-- Plugin fingerprint -->
var x=navigator.plugins.length; // store the total no of plugin stored 
var txt=x;
for(var i=0;i<x;i++)
{
  var z=txt+=navigator.plugins[i].name; 
}
var plugin=z;
console.log(plugin);
<!-- End Plugin fingerprint -->

<!--  Random Cookie  -->
var cookieNameFP=Math.random();
function setCookieFP(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*3*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookieFP(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookieFP() {
    var userFP=getCookieFP("usernameFP");
    if (userFP != "") {
      var repeted_userFP= userFP;
	  return repeted_userFP;
	  
    } else {
		v =document.getElementById('FP');
       userFP = FP.value;
	   
       if (userFP != "" && userFP != null) {
           setCookieFP("usernameFP", userFP, 30);
       }
	   return userFP;
    }
}

document.write('<body onload="bodyload();">');
document.write('<input type="hidden" name="FP" class="enter" value="" id="FP"/>');
document.getElementById('FP').value = cookieNameFP;
var repeted_cookieFP=checkCookieFP();
console.log(repeted_cookieFP); 
<!--  End Random Cookie  -->



<!--  START Custom CHECKER Fingerprint  -->

   var b = [];
   b.push(navigator.userAgent);
   b.push(navigator.language);
   b.push(screen.colorDepth);
   b.push((new Date).getTimezoneOffset());
   b.push(this.hasSessionStorage());
   b.push(this.hasLocalStorage());
   b.push(!!window.indexedDB);
   document.body ? b.push(typeof document.body.addBehavior) : b.push("undefined");
   b.push(typeof window.openDatabase);
   b.push(navigator.cpuClass);
   b.push(navigator.platform);
   b.push(navigator.doNotTrack);
  // b.push(this.getPluginsString());
   function hasLocalStorage() {
   try {
    console.log(!!window.localStorage);
    return !!window.localStorage
   } catch (a) {
    return !0
   }
  }
  var hasLocalStorageFP=hasLocalStorage();

  function hasSessionStorage() {
   try {
    console.log(!!window.sessionStorage);
    return !!window.sessionStorage
   } catch (a) {
    return !0
   }
  }
  var hasSessionStorageFP=hasSessionStorage();
  
   function isCanvasSupported() {
   var a = document.createElement("canvas");
   console.log(a.getContext("2d"));
   return !(!a.getContext || !a.getContext("2d"))
  }
  var isCanvasSupportedFP=isCanvasSupported();
  //alert(isCanvasSupportedFP);
   function  isIE() {
   return "Microsoft Internet Explorer" === navigator.appName || "Netscape" === navigator.appName && /Trident/.test(navigator.userAgent) ? !0 : !1
  }
 var isIEFP=isIE();
// alert(isIEFP);
   function getScreenResolution() {
    console.log(screen.height, screen.width);
   return [screen.height, screen.width]
  }
  var getScreenResolutionFP=getScreenResolution();



<!--  END Custom CHECKER Fingerprint  -->


<!--  START Custom Canvas Fingerprint  -->

function f() {
    if (!window.HTMLCanvasElement) {

     return 0;
    }
    try {
     var D = "",
      A = document.createElement("canvas"),
      B = A.getContext("2d");
     A.style.display = "none";
     B.textBaseline = "top";
     B.textBaseline = "alphabetic";
     B.fillStyle = "#f60";
     B.fillRect(125, 1, 62, 20);
     B.fillStyle = "#069";
     B.fillText(A, "11pt no-real-font-" + (Math.floor(Math.random * 1000)), 2, 15);
     B.fillStyle = "rgba(102, 204, 0, 0.7)";
     B.fillText(A, "18pt Arial", 4, 17);
     try {
      document.body.appendChild(A);
     } catch (C) {}
     D = A.toDataURL ? A.toDataURL() : "xxx";
     try {
      B.globalCompositeOperation = "screen";
      D += (B.globalCompositeOperation === "screen") ? "gco" : "000";
     } catch (C) {
      D += "grr";
     }
     try {
      B.clearRect(0, 0, 30, 30);
      B.rect(0, 0, 10, 10);
      B.rect(2, 2, 6, 6);
      D += (B.isPointInPath(5, 5, "evenodd") === false) ? "ppn" : "ppy";
     } catch (C) {
      D += "prr";
     }
     try {
      B.clearRect(0, 0, 30, 30);
      B.textBaseline = "top";
      B.font = "32px Arial";
      B.fillText("\ud83d\ude03", 0, 0);
      D += (B.getImageData(16, 16, 1, 1)
       .data[0] !== 0) ? "emo" : "eno";
     } catch (C) {
      D += "irr";
     }
    } catch (C) {
     return D + "1";
    } finally {
     try {
      A.parentNode.removeChild(A);
     } catch (C) {} finally {
        console.log(D);
      return D;
     }
    }
   }
  
 var canvasFPenhance=f();

 var canvasFPenhanceData = canvasFPenhance.slice(-300);


<!--  END Custom Canvas Fingerprint  -->


<!--  Start Custom Font Fingerprint  -->
// Call this function and pass in the name of the font you want to check for availability.
//
var fontName = [];
var fontsDefine = ["Comic Sans MS","Lingoes Unicode","Gadugi","Aldhabi","TeamViewer10","Javanese Text","Buxton Sketch","Trajan Pro","VNI-Silver","A Charming Font","VNI-Calligraphic","Arimo","TeamViewer9","VNI-Centur","Vinhan","VNI-Baybuom","Arial Unicode MS","Agency FB","Aharoni","DaunPenh","Segoe Print","Haettenschweiler","MS Outlook","VNI Greece","Gentium Basic","OpenSymbol","Helvetica","Letter Gothic Std","Minion Pro SmBd","Myriad Arabic","Sitka Banner","Yu Gothic","Myanmar Text","Urdu Typesetting","Kruti Dev","Devlys","Devanagari","Bamini"];


//var b ="Lingoes Unicode;Gadugi;Aldhabi;TeamViewer10;Javanese Text;Buxton Sketch;Trajan Pro;VNI-Silver;A Charming Font;VNI-Calligraphic;Arimo;TeamViewer9;VNI-Centur;Vinhan;VNI-Baybuom;Arial Unicode MS;Agency FB;Aharoni;DaunPenh;Segoe Print;Haettenschweiler;MS Outlook;VNI Greece;Gentium Basic;OpenSymbol;Helvetica;Letter Gothic Std;Minion Pro SmBd;Myriad Arabic;Sitka Banner;Yu Gothic;Myanmar Text;Urdu Typesetting".split(";");
function doesFontExist(fontName) {
    // creating our in-memory Canvas element where the magic happens
    var canvas = document.createElement("canvas");
    var context = canvas.getContext("2d");
     
    // the text whose final pixel size I want to measure
    var text = "abcdefghijklmnopqrstuvwxyz0123456789";
     
    // specifying the baseline font
    context.font = "72px monospace";
     
    // checking the size of the baseline text
    var baselineSize = context.measureText(text).width;
    // console.log(baselineSize);
    // specifying the font whose existence we want to check
    context.font = "72px '" + fontName + "', monospace";
    // console.log(context.font);
    // checking the size of the font we want to check
    var newSize = context.measureText(text).width;
     //console.log(newSize);
    // removing the Canvas element we created
    delete canvas;
     
    //
    // If the size of the two text instances is the same, the font does not exist because it is being rendered
    // using the default sans-serif font
    //
    if (newSize == baselineSize) {
        console.log('false');
        return false;
    } else {
        console.log('true');
        console.log(fontName);
        return fontName;
    }
}

//fontsDefine.forEach(doesFontExist);
for (var i = 0; i < fontsDefine.length; i++) {
    fontsDefine[i];
    var x=doesFontExist(fontsDefine[i]);
    fontName.push(x);
};

var fontFound=fontName.toString();

<!-- End Custom Font Fingerprint  -->










<!-- Our Final Fingerprint  -->
var fingerprint_merge=fingerprint_fonts_data+fingerprint_data+browser+os+display+flash+java+timezone+plugin+hasLocalStorageFP+hasSessionStorageFP+isCanvasSupportedFP+isIEFP+getScreenResolutionFP+canvasFPenhanceData+fontFound+repeted_cookieFP;
//alert(fingerprint_merge);
<!-- End Our Final Fingerprint  --->

<!--   JS MD5 Hash Convert -->
var MD5 = function (string) {

   function RotateLeft(lValue, iShiftBits) {
           return (lValue<<iShiftBits) | (lValue>>>(32-iShiftBits));
   }

   function AddUnsigned(lX,lY) {
           var lX4,lY4,lX8,lY8,lResult;
           lX8 = (lX & 0x80000000);
           lY8 = (lY & 0x80000000);
           lX4 = (lX & 0x40000000);
           lY4 = (lY & 0x40000000);
           lResult = (lX & 0x3FFFFFFF)+(lY & 0x3FFFFFFF);
           if (lX4 & lY4) {
                   return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
           }
           if (lX4 | lY4) {
                   if (lResult & 0x40000000) {
                           return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
                   } else {
                           return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
                   }
           } else {
                   return (lResult ^ lX8 ^ lY8);
           }
   }

   function F(x,y,z) { return (x & y) | ((~x) & z); }

   function G(x,y,z) { return (x & z) | (y & (~z)); }
   function H(x,y,z) { return (x ^ y ^ z); }
   function I(x,y,z) { return (y ^ (x | (~z))); }

   function FF(a,b,c,d,x,s,ac) {
           a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
           return AddUnsigned(RotateLeft(a, s), b);
   };

   function GG(a,b,c,d,x,s,ac) {
           a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
           return AddUnsigned(RotateLeft(a, s), b);
   };

   function HH(a,b,c,d,x,s,ac) {
           a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
           return AddUnsigned(RotateLeft(a, s), b);
   };

   function II(a,b,c,d,x,s,ac) {
           a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
           return AddUnsigned(RotateLeft(a, s), b);
   };

   function ConvertToWordArray(string) {
           var lWordCount;
           var lMessageLength = string.length;
           var lNumberOfWords_temp1=lMessageLength + 8;
           var lNumberOfWords_temp2=(lNumberOfWords_temp1-(lNumberOfWords_temp1 % 64))/64;
           var lNumberOfWords = (lNumberOfWords_temp2+1)*16;
           var lWordArray=Array(lNumberOfWords-1);
           var lBytePosition = 0;
           var lByteCount = 0;
           while ( lByteCount < lMessageLength ) {
                   lWordCount = (lByteCount-(lByteCount % 4))/4;
                   lBytePosition = (lByteCount % 4)*8;
                   lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount)<<lBytePosition));
                   lByteCount++;
           }
           lWordCount = (lByteCount-(lByteCount % 4))/4;
           lBytePosition = (lByteCount % 4)*8;
           lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80<<lBytePosition);
           lWordArray[lNumberOfWords-2] = lMessageLength<<3;
           lWordArray[lNumberOfWords-1] = lMessageLength>>>29;
           return lWordArray;
   };

   function WordToHex(lValue) {
           var WordToHexValue="",WordToHexValue_temp="",lByte,lCount;
           for (lCount = 0;lCount<=3;lCount++) {
                   lByte = (lValue>>>(lCount*8)) & 255;
                   WordToHexValue_temp = "0" + lByte.toString(16);
                   WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length-2,2);
           }
           return WordToHexValue;
   };

   function Utf8Encode(string) {
           string = string.replace(/\r\n/g,"\n");
           var utftext = "";

           for (var n = 0; n < string.length; n++) {

                   var c = string.charCodeAt(n);

                   if (c < 128) {
                           utftext += String.fromCharCode(c);
                   }
                   else if((c > 127) && (c < 2048)) {
                           utftext += String.fromCharCode((c >> 6) | 192);
                           utftext += String.fromCharCode((c & 63) | 128);
                   }
                   else {
                           utftext += String.fromCharCode((c >> 12) | 224);
                           utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                           utftext += String.fromCharCode((c & 63) | 128);
                   }

           }

           return utftext;
   };

   var x=Array();
   var k,AA,BB,CC,DD,a,b,c,d;
   var S11=7, S12=12, S13=17, S14=22;
   var S21=5, S22=9 , S23=14, S24=20;
   var S31=4, S32=11, S33=16, S34=23;
   var S41=6, S42=10, S43=15, S44=21;

   string = Utf8Encode(string);

   x = ConvertToWordArray(string);

   a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;

   for (k=0;k<x.length;k+=16) {
           AA=a; BB=b; CC=c; DD=d;
           a=FF(a,b,c,d,x[k+0], S11,0xD76AA478);
           d=FF(d,a,b,c,x[k+1], S12,0xE8C7B756);
           c=FF(c,d,a,b,x[k+2], S13,0x242070DB);
           b=FF(b,c,d,a,x[k+3], S14,0xC1BDCEEE);
           a=FF(a,b,c,d,x[k+4], S11,0xF57C0FAF);
           d=FF(d,a,b,c,x[k+5], S12,0x4787C62A);
           c=FF(c,d,a,b,x[k+6], S13,0xA8304613);
           b=FF(b,c,d,a,x[k+7], S14,0xFD469501);
           a=FF(a,b,c,d,x[k+8], S11,0x698098D8);
           d=FF(d,a,b,c,x[k+9], S12,0x8B44F7AF);
           c=FF(c,d,a,b,x[k+10],S13,0xFFFF5BB1);
           b=FF(b,c,d,a,x[k+11],S14,0x895CD7BE);
           a=FF(a,b,c,d,x[k+12],S11,0x6B901122);
           d=FF(d,a,b,c,x[k+13],S12,0xFD987193);
           c=FF(c,d,a,b,x[k+14],S13,0xA679438E);
           b=FF(b,c,d,a,x[k+15],S14,0x49B40821);
           a=GG(a,b,c,d,x[k+1], S21,0xF61E2562);
           d=GG(d,a,b,c,x[k+6], S22,0xC040B340);
           c=GG(c,d,a,b,x[k+11],S23,0x265E5A51);
           b=GG(b,c,d,a,x[k+0], S24,0xE9B6C7AA);
           a=GG(a,b,c,d,x[k+5], S21,0xD62F105D);
           d=GG(d,a,b,c,x[k+10],S22,0x2441453);
           c=GG(c,d,a,b,x[k+15],S23,0xD8A1E681);
           b=GG(b,c,d,a,x[k+4], S24,0xE7D3FBC8);
           a=GG(a,b,c,d,x[k+9], S21,0x21E1CDE6);
           d=GG(d,a,b,c,x[k+14],S22,0xC33707D6);
           c=GG(c,d,a,b,x[k+3], S23,0xF4D50D87);
           b=GG(b,c,d,a,x[k+8], S24,0x455A14ED);
           a=GG(a,b,c,d,x[k+13],S21,0xA9E3E905);
           d=GG(d,a,b,c,x[k+2], S22,0xFCEFA3F8);
           c=GG(c,d,a,b,x[k+7], S23,0x676F02D9);
           b=GG(b,c,d,a,x[k+12],S24,0x8D2A4C8A);
           a=HH(a,b,c,d,x[k+5], S31,0xFFFA3942);
           d=HH(d,a,b,c,x[k+8], S32,0x8771F681);
           c=HH(c,d,a,b,x[k+11],S33,0x6D9D6122);
           b=HH(b,c,d,a,x[k+14],S34,0xFDE5380C);
           a=HH(a,b,c,d,x[k+1], S31,0xA4BEEA44);
           d=HH(d,a,b,c,x[k+4], S32,0x4BDECFA9);
           c=HH(c,d,a,b,x[k+7], S33,0xF6BB4B60);
           b=HH(b,c,d,a,x[k+10],S34,0xBEBFBC70);
           a=HH(a,b,c,d,x[k+13],S31,0x289B7EC6);
           d=HH(d,a,b,c,x[k+0], S32,0xEAA127FA);
           c=HH(c,d,a,b,x[k+3], S33,0xD4EF3085);
           b=HH(b,c,d,a,x[k+6], S34,0x4881D05);
           a=HH(a,b,c,d,x[k+9], S31,0xD9D4D039);
           d=HH(d,a,b,c,x[k+12],S32,0xE6DB99E5);
           c=HH(c,d,a,b,x[k+15],S33,0x1FA27CF8);
           b=HH(b,c,d,a,x[k+2], S34,0xC4AC5665);
           a=II(a,b,c,d,x[k+0], S41,0xF4292244);
           d=II(d,a,b,c,x[k+7], S42,0x432AFF97);
           c=II(c,d,a,b,x[k+14],S43,0xAB9423A7);
           b=II(b,c,d,a,x[k+5], S44,0xFC93A039);
           a=II(a,b,c,d,x[k+12],S41,0x655B59C3);
           d=II(d,a,b,c,x[k+3], S42,0x8F0CCC92);
           c=II(c,d,a,b,x[k+10],S43,0xFFEFF47D);
           b=II(b,c,d,a,x[k+1], S44,0x85845DD1);
           a=II(a,b,c,d,x[k+8], S41,0x6FA87E4F);
           d=II(d,a,b,c,x[k+15],S42,0xFE2CE6E0);
           c=II(c,d,a,b,x[k+6], S43,0xA3014314);
           b=II(b,c,d,a,x[k+13],S44,0x4E0811A1);
           a=II(a,b,c,d,x[k+4], S41,0xF7537E82);
           d=II(d,a,b,c,x[k+11],S42,0xBD3AF235);
           c=II(c,d,a,b,x[k+2], S43,0x2AD7D2BB);
           b=II(b,c,d,a,x[k+9], S44,0xEB86D391);
           a=AddUnsigned(a,AA);
           b=AddUnsigned(b,BB);
           c=AddUnsigned(c,CC);
           d=AddUnsigned(d,DD);
   		}

   	var temp = WordToHex(a)+WordToHex(b)+WordToHex(c)+WordToHex(d);

   	return temp.toLowerCase();
}

//alert(fingerprint_mxpresso);
var fingerprint_mxpresso=MD5(fingerprint_merge);
//alert(fingerprint_mxpresso);
<!--  End JS MD5 Hash Convert  -->

	var d = new Date();
	var n = d.getTime();
	var coupon_name;
	var customerID;
	

document.write('<img  src="http://localhost/suspicious/tr.php?cookie='+cookieName+'&rep_cookie='+repeted_cookie+'&local_storage='+unique_ID+'&font_fingerprint='+fingerprint_fonts_data+'&canvas_fingerprint='+fingerprint_data+'&browser_fingerprint='+browser+'&os_fingerprint='+os+'&display_fingerprint='+display+'&latency_fingerprint='+latency+'&cookie_chk_fingerprint='+cookie_chk+'&adobe_flash='+flash+'&java_enable='+java+'&timezone='+timezone+'&plugin_name='+plugin+'&hasLocalStorageCon='+hasLocalStorageFP+'&hasSessionStorageCon='+hasSessionStorageFP+'&isCanvasSupportedCon='+isCanvasSupportedFP+'&isIECon='+isIEFP+'&getScreenResolutionData='+getScreenResolutionFP+'&canvasFPenhanceFullData='+canvasFPenhanceData+'&fontFoundData='+fontFound+'&repeted_cookie='+repeted_cookieFP+'&mxpresso_fingerprint='+fingerprint_mxpresso+'&customer_id='+customerID+'&coupon='+coupon_name+'&referrer_url='+ref_url+'&t='+n+'" width="1" height="1" style="display: none;"/>');
	
function bodyload(){
   checkCookie();
   fingerprint_canvas();
   fingerprint_fonts();
   fingerprint_browser();
   fingerprint_os();
   fingerprint_display();
   fingerprint_latency();
   fingerprint_cookie();
   fingerprint_flash();
   fingerprint_java();
   fingerprint_timezone();
   checkCookieFP();
   

}
