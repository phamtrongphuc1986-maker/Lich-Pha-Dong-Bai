// ===== DU LIEU LICH PHA =====
// Nguon: bang lich BQL Ben Pha Dong Bai - Cai Vieng, ap dung 01/9/2026-31/12/2026.
// Moi dong la mot cap chuyen: gio khoi hanh o Ben Cai Vieng va Ben Dong Bai.
// loai "lon" = pha >=180 tan.

// Chuyen phat sinh tang cuong CHI o chieu Dong Bai (khong co chuyen doi tac trong lich nay):
// phuc vu xe xang dau, xe gas, hang chay no / hoi tanh.
var chuyenPhatSinhDB = [
  { gio: "14:00", nhan: "★ >180 tấn — chở xe cháy nổ, hôi tanh" }
];
var lichPha = [
  { caiVieng: "05:00", dongBai: "05:30", loai: "lon" },
  { caiVieng: "05:30", dongBai: "06:00", loai: "lon" },
  { caiVieng: "06:00", dongBai: "06:30", loai: "lon" },
  { caiVieng: "06:30", dongBai: "07:00", loai: "lon" },
  { caiVieng: "07:00", dongBai: "07:40", loai: "lon" },
  { caiVieng: "07:40", dongBai: "08:20", loai: "lon" },
  { caiVieng: "08:20", dongBai: "09:00", loai: "lon" },
  { caiVieng: "09:00", dongBai: "09:30", loai: "lon" },
  { caiVieng: "09:30", dongBai: "10:00", loai: "lon" },
  { caiVieng: "10:00", dongBai: "10:30", loai: "lon" },
  { caiVieng: "10:30", dongBai: "11:00", loai: "lon" },
  { caiVieng: "11:00", dongBai: "11:30", loai: "lon" },
  { caiVieng: "11:30", dongBai: "12:00", loai: "lon" },
  { caiVieng: "12:00", dongBai: "12:30", loai: "lon" },
  { caiVieng: "12:30", dongBai: "13:00", loai: "lon" },
  { caiVieng: "13:00", dongBai: "13:40", loai: "lon" },
  { caiVieng: "13:40", dongBai: "14:20", loai: "lon" },
  { caiVieng: "14:20", dongBai: "15:00", loai: "lon" },
  { caiVieng: "15:00", dongBai: "15:30", loai: "lon" },
  { caiVieng: "15:30", dongBai: "16:00", loai: "lon" },
  { caiVieng: "16:00", dongBai: "16:30", loai: "lon" },
  { caiVieng: "16:30", dongBai: "17:00", loai: "lon" },
  { caiVieng: "17:00", dongBai: "17:30", loai: "lon" },
  { caiVieng: "17:30", dongBai: "18:00", loai: "lon" }
];

// ===== THONG BAO (sua danh sach nay khi co thong bao moi) =====
// loai: "khan" = su co thoi tiet / thay doi lich; "thuong" = thong bao chung.
var thongBao = [
  // Vi du:
  // { loai: "khan", ngay: "28/10/2026", tieuDe: "Gio to", noiDung: "Cac chuyen chieu nay tam dung..." }
];

var thongBaoLeTet = [
  // Vi du:
  // { ngay: "01/01/2027", tieuDe: "Tet Duong lich", noiDung: "Ben chay theo lich ngay le..." }
];

// ===== GIA VE =====
// Nguon: Bang gia dich vu pha Ben Dong Bai - Cai Vieng (anh user gui 28/10/2026).
// Gia da bao gom thue VAT 8%. Can cu: Thong tu 45/2024/TT-BTC ngay 01/7/2024 va
// Quyet dinh 3701/QD-UBND TP Hai Phong ngay 12/9/2025.
var bangGiaVe = [
  { nhom: "I. Giá dịch vụ chung",
    ghiChu: "Áp dụng cho mọi hành khách, gồm khách du lịch và người ngoài Đặc Khu Cát Hải. Giá xe tính theo xe, không kể khách ngồi trên xe.",
    muc: [
    { loaiXe: "Hành khách đi bộ", gia: "13.000đ/người" },
    { loaiXe: "Hành khách đi xe đạp", gia: "11.880đ/người" },
    { loaiXe: "Xe đạp thồ các loại", gia: "11.880đ/người" },
    { loaiXe: "Hành khách đi xe máy", gia: "43.200đ/xe" },
    { loaiXe: "Xe ô tô dưới 9 chỗ ngồi (không kể người ngồi trên xe)", gia: "190.080đ/xe" },
    { loaiXe: "Xe ô tô khách từ 9 đến dưới 24 chỗ (không kể khách)", gia: "210.600đ/xe" },
    { loaiXe: "Xe ô tô khách từ 24 đến dưới 32 chỗ (không kể khách)", gia: "240.840đ/xe" },
    { loaiXe: "Xe ô tô khách từ 32 chỗ ngồi trở lên (không kể khách)", gia: "329.400đ/xe" },
    { loaiXe: "Xe ô tô tải dưới 1 tấn có hàng", gia: "210.600đ/xe" },
    { loaiXe: "Xe ô tô tải dưới 1 tấn không hàng", gia: "138.240đ/xe" },
    { loaiXe: "Xe ô tô tải từ 1 tấn đến dưới 3 tấn có hàng", gia: "403.920đ/xe" },
    { loaiXe: "Xe ô tô tải từ 1 tấn đến dưới 3 tấn không hàng", gia: "240.840đ/xe" },
    { loaiXe: "Xe ô tô tải từ 03 tấn đến dưới 05 tấn có hàng", gia: "490.320đ/xe" },
    { loaiXe: "Xe ô tô tải từ 03 tấn đến dưới 05 tấn không hàng", gia: "363.960đ/xe" },
    { loaiXe: "Xe ô tô tải từ 05 tấn đến dưới 10 tấn có hàng", gia: "759.240đ/xe" },
    { loaiXe: "Xe ô tô tải từ 05 tấn đến dưới 10 tấn không hàng", gia: "451.440đ/xe" },
    { loaiXe: "Xe ô tô tải từ 10 tấn đến dưới 13 tấn có hàng", gia: "932.040đ/xe" },
    { loaiXe: "Xe ô tô tải từ 10 tấn đến dưới 13 tấn không hàng", gia: "498.960đ/xe" },
    { loaiXe: "Hàng hoá qua phà từ 61kg trở lên", gia: "19.440đ/tạ" },
    { loaiXe: "Xe ô tô tải từ 13 tấn đến dưới 16 tấn có hàng", gia: "1.395.360đ/xe" },
    { loaiXe: "Xe ô tô tải từ 13 tấn đến dưới 16 tấn không hàng", gia: "686.880đ/xe" },
    { loaiXe: "Xe ô tô tải từ 16 tấn đến dưới 30 tấn có hàng", gia: "1.524.960đ/xe" },
    { loaiXe: "Xe ô tô tải từ 16 tấn đến dưới 30 tấn không hàng", gia: "738.720đ/xe" },
    { loaiXe: "Xe ô tô tải từ 30 tấn đến dưới 40 tấn có hàng", gia: "1.258.200đ/xe" },
    { loaiXe: "Xe ô tô tải từ 30 tấn đến dưới 40 tấn không hàng", gia: "813.240đ/xe" },
    { loaiXe: "Xe ô tô tải từ 40 tấn đến dưới 47 tấn không hàng", gia: "886.680đ/xe" },
    { loaiXe: "Xe trộn bê tông (khối lượng toàn bộ đến 25 tấn) có bê tông", gia: "992.520đ/xe" },
    { loaiXe: "Xe trộn bê tông (khối lượng toàn bộ đến 25 tấn) không có bê tông", gia: "776.520đ/xe" },
    { loaiXe: "Xe đầu kéo sơmi rơ mooc chở Container đến 20Feet có hàng", gia: "1.467.720đ/xe" },
    { loaiXe: "Xe đầu kéo sơmi rơ mooc chở Container đến 20Feet không hàng", gia: "727.920đ/xe" },
    { loaiXe: "Xe đầu kéo sơmi rơ mooc chở Container trên 20Feet (khối lượng toàn bộ của tổ hợp xe đến 47 tấn) có hàng", gia: "1.939.680đ/xe" },
    { loaiXe: "Xe đầu kéo sơmi rơ mooc chở Container trên 20Feet (khối lượng toàn bộ của tổ hợp xe đến 47 tấn) không có hàng", gia: "1.198.800đ/xe" }
  ]},
  { nhom: "II. Áp dụng đối với người dân Đặc Khu Cát Hải",
    ghiChu: "Nhóm người dân Đặc Khu Cát Hải, TP. Hải Phòng được giảm giá (còn một nửa giá chung). Đơn vị tính theo bảng giá niêm yết tại bến.",
    muc: [
    { loaiXe: "Hành khách đi bộ", gia: "6.500đ/xe" },
    { loaiXe: "Hành khách đi xe đạp", gia: "5.940đ/xe" },
    { loaiXe: "Xe đạp thồ các loại", gia: "5.940đ/xe" },
    { loaiXe: "Hành khách đi xe máy", gia: "21.600đ/xe" },
    { loaiXe: "Xe ô tô dưới 9 chỗ ngồi (không kể người ngồi trên xe)", gia: "95.040đ/xe" }
  ]}
];

// ===== THAT LAC DO (them dong moi khi co tin tim do) =====
var tinThatLac = [
  { tieuDe: "Đồ để quên trên phà Bayview 01 – 05",
    noiDung: "Hành khách để quên đồ trên phà liên hệ Ban chỉ huy Bến tại đầu bến Đồng Bài hoặc Cái Viềng để được hỗ trợ nhận lại." },
  { tieuDe: "Đồ rơi ở làn xe chờ",
    noiDung: "Khu vực làn xe chờ hai đầu bến được kiểm tra thường xuyên. Hành khách mất đồ tại đây liên hệ Ban chỉ huy Bến." },
  { tieuDe: "Giấy tờ rơi tại Đặc Khu Cát Hải",
    noiDung: "Ngoài liên hệ bến phà, hành khách có thể đăng tìm trong các hội nhóm Facebook của khu vực Cát Hải ở mục dưới đây." }
];

// Link cac group Facebook (them dan khi co group moi):
var nhomFacebook = [
  { ten: "Bến Phà Đồng Bài 1-3-2024", link: "https://www.facebook.com/share/g/19hTbSXEfV/" },
  { ten: "Bến Phà Đồng Bài ( Cát Hải ) - Cái Viềng", link: "https://www.facebook.com/share/g/1dK15TUguy/" }
];

// ===== CAC HAM HIEN THI =====
function thanhPhut(gio) {
  var p = gio.split(":");
  return parseInt(p[0]) * 60 + parseInt(p[1]);
}

function chuyenTiepTheo(danhSachGio, bayGioPhut) {
  for (var i = 0; i < danhSachGio.length; i++) {
    if (thanhPhut(danhSachGio[i].gio) > bayGioPhut) {
      return { gio: danhSachGio[i].gio, con: thanhPhut(danhSachGio[i].gio) - bayGioPhut, mai: false };
    }
  }
  return { gio: danhSachGio[0].gio, con: null, mai: true };
}

// Dong bang lich: kich hoat khi (a) co thong bao thoi tiet xau (giong gio to / bao /
// gio mua > cap 5) mang co dongBangLich, HOAC (b) co che tu dong theo gio tai ben
// (xem danhGiaDongBangTuDong ben duoi) dang bat. Khi dong bang: bang lich khong to
// vang chuyen sap chay, khong dich vach theo gio hien tai — cac hang trang binh
// thuong, lich dung o dau danh sach; khung Chuyen tiep theo dung o chuyen dau ngay.
// Go thong bao la lich tu tro lai hanh vi thuong ngay. Rieng co che tu dong:
// chi mo lai khi gio lang lien tuc >= 30 phut (xem langLienTuc30Phut ben duoi).
var dongBangTuDong = false;
var thongBaoTuDong = null;

function lichDangDongBang() {
  if (dongBangTuDong === true) return true;
  for (var i = 0; i < thongBao.length; i++) {
    if (thongBao[i].dongBangLich === true) return true;
  }
  return false;
}

function dsThongBaoHienThi() {
  return thongBaoTuDong ? [thongBaoTuDong].concat(thongBao) : thongBao;
}

// ===== DONG BANG TU DONG THEO GIO (du lieu the Thoi tiet, tram Ben Dong Bai) =====
// Nguong BAT - user chot lai 09/11/2026 (don gian hoa): cu gio TREN cap 5 la thong
// bao — tuc gio thuong HOAC gio giat vuot 10,7 m/s (tran cua cap 5) o mot trong
// hai so thi coi nhu dung chay pha vi gio lon: tu hien thong bao dung + dong bang.
// Nguong GO - user chot them 09/11/2026 (bat doi xung, chong nhap nhay): chi mo
// lai khi gio LANG lien tuc du 30 phut: gio thuong cap 4 tro xuong (<= 7,9 m/s)
// VA giat <= 8 m/s trong suot 30 phut gan nhat. Vung giua (da duoi nguong bat
// nhung chua dat muc lang) thi VAN dong bang. "Lang lien tuc" suy tu chuoi du
// lieu cua chinh nguon Open-Meteo (minutely_15, du phong hourly) — khong dung
// localStorage cua tung khach lam can cu. Thieu du lieu chuoi thi giu dong bang
// (an toan hon mo nham). Co thu cong dongBangLich van thang tuyet doi: ham
// lichDangDongBang() OR co tay nen go tu dong cung khong mo duoc khi co tay bat.
// Chi danh gia khi co du lieu thoi tiet MOI cua tram ben (mo trang / lam moi the
// Thoi tiet). Khong dung so gio theo vi tri cua khach de tranh nham ben.

// Mot diem do co "lang" theo muc user chot khong? (so vao tinh bang km/h)
function soLang(gioKmh, giatKmh) {
  return (gioKmh / 3.6 <= 7.9) && (giatKmh / 3.6 <= 8);
}

// Kiem tra 30 phut gan nhat (tinh toi thoi diem cua du lieu current) co lang
// lien tuc khong, dua tren chuoi minutely_15 (buoc 15 phut) cua Open-Meteo;
// neu khong co minutely_15 thi dung hourly (buoc 1 gio — chat hon: 2 diem lien
// tiep lang = phu >= 60 phut). Moi diem trong cua so 30 phut phai lang; chi can
// 1 diem pha muc lang la chua du (tuong duong dong ho 30 phut tinh lai tu do).
function langLienTuc30Phut(c, d) {
  if (!soLang(c.wind_speed_10m, c.wind_gusts_10m)) return false;
  var tNow = Date.parse(c.time || "");
  if (isNaN(tNow)) return false;
  var nguon = null;
  if (d && d.minutely_15 && d.minutely_15.time && d.minutely_15.wind_speed_10m) nguon = d.minutely_15;
  else if (d && d.hourly && d.hourly.time && d.hourly.wind_speed_10m) nguon = d.hourly;
  if (!nguon) return false;
  var times = nguon.time, gio = nguon.wind_speed_10m, giat = nguon.wind_gusts_10m;
  var iCuoi = -1;
  for (var i = 0; i < times.length; i++) {
    if (Date.parse(times[i]) <= tNow) iCuoi = i; else break;
  }
  if (iCuoi < 0) return false;
  var tCuoi = Date.parse(times[iCuoi]);
  var phuDu30 = false;
  for (var j = iCuoi; j >= 0; j--) {
    var tj = Date.parse(times[j]);
    if (tCuoi - tj > 30 * 60 * 1000) break;
    if (!soLang(gio[j], giat[j])) return false;
    if (tCuoi - tj >= 30 * 60 * 1000) phuDu30 = true;
  }
  return phuDu30;
}

function danhGiaDongBangTuDong(c, d) {
  var gioMs = c.wind_speed_10m / 3.6;
  var giatMs = c.wind_gusts_10m / 3.6;
  var cap = capGio(gioMs);
  var kichHoat = (gioMs > 10.7) || (giatMs > 10.7);
  if (kichHoat) {
    dongBangTuDong = true;
    var t = c.time || "";
    var gioCN = t.length >= 16 ? t.substring(11, 16) : "";
    var ngayCN = t.length >= 10 ? (t.substring(8, 10) + "/" + t.substring(5, 7) + "/" + t.substring(0, 4)) : "";
    thongBaoTuDong = {
      loai: "khan", ngay: ngayCN,
      tieuDe: "⛔ Tạm dừng hoạt động chạy phà do gió lớn",
      noiDung: "<p style='margin:4px 0'>Gió tại khu vực bến lúc " + gioCN + ": <strong>" + dangMs(c.wind_speed_10m) + " m/s — gió cấp " + cap + " (giật " + dangMs(c.wind_gusts_10m) + " m/s)</strong>. Số liệu cập nhật lúc " + gioCN + ".</p>" +
        "<p style='margin:4px 0'>Các chuyến phà tạm dừng hoạt động cho tới khi gió giảm dưới ngưỡng an toàn và có thông báo điều hành mới. Hành khách vui lòng theo dõi mục thông báo này để cập nhật.</p>"
    };
  } else if (dongBangTuDong === true && langLienTuc30Phut(c, d)) {
    // Lang lien tuc du 30 phut -> mo lai
    dongBangTuDong = false;
    thongBaoTuDong = null;
  }
  // Cac truong hop con lai: giu nguyen trang thai tu dong hien tai
  // (chua tung dong bang thi khong lam gi; dang dong bang ma chua lang du
  // 30 phut thi van dong bang, thong bao dung giu nguyen).
  // Ap dung ngay trang thai moi: ve lai muc Thong bao va bang lich
  veTheDanhSach(dsThongBaoHienThi(), "danhSachThongBao", "Hiện chưa có thông báo mới. Bến hoạt động bình thường theo lịch.");
  veBangLich();
}

function veBangLich() {
  var bayGio = new Date();
  var phut = bayGio.getHours() * 60 + bayGio.getMinutes();
  var dongBang = lichDangDongBang();

  var dsDB = lichPha.map(function (d) { return { gio: d.dongBai, loai: d.loai, dacBiet: false }; });
  chuyenPhatSinhDB.forEach(function (ps) { dsDB.push({ gio: ps.gio, loai: "lon", dacBiet: true, nhan: ps.nhan }); });
  dsDB.sort(function (a, b) { return thanhPhut(a.gio) - thanhPhut(b.gio); });
  var dsCV = lichPha.map(function (d) { return { gio: d.caiVieng, loai: d.loai, dacBiet: false }; });
  var tiepDB = chuyenTiepTheo(dsDB, phut);
  var tiepCV = chuyenTiepTheo(dsCV, phut);

  function bang(ds, tiep) {
    var html = "<table><tr><th>Giờ khởi hành</th><th>Loại phà</th></tr>";
    for (var i = 0; i < ds.length; i++) {
      var cls = (!dongBang && !tiep.mai && ds[i].gio === tiep.gio) ? " class='sapChay'" : "";
      var loai = ds[i].dacBiet
        ? "<span class='nhanNho'>" + ds[i].nhan + "</span>"
        : (ds[i].loai === "nho"
          ? "<span class='nhanNho'>★ &lt;100 tấn — hàng cháy nổ, hôi tanh</span>"
          : "≥180 tấn");
      html += "<tr" + cls + "><td>" + ds[i].gio + "</td><td>" + loai + "</td></tr>";
    }
    return html + "</table>";
  }
  document.getElementById("bangDB").innerHTML = bang(dsDB, tiepDB);
  document.getElementById("bangCV").innerHTML = bang(dsCV, tiepCV);

  document.getElementById("bayGio").textContent =
    "Bây giờ: " + bayGio.toLocaleTimeString("vi-VN", { hour: "2-digit", minute: "2-digit" }) +
    " — " + bayGio.toLocaleDateString("vi-VN", { weekday: "long", day: "2-digit", month: "2-digit", year: "numeric" });
  if (dongBang) {
    // Trang thai dong bang: khung Chuyen tiep theo dung o chuyen DAU ngay cua moi ben,
    // nhan tinh "Chuyen dau ngay" thay cho dem nguoc theo gio that.
    document.getElementById("chuyenDB").textContent = dsDB[0].gio;
    document.getElementById("chuyenCV").textContent = dsCV[0].gio;
    document.getElementById("conDB").textContent = "Chuyến đầu ngày";
    document.getElementById("conCV").textContent = "Chuyến đầu ngày";
  } else {
    document.getElementById("chuyenDB").textContent = tiepDB.gio;
    document.getElementById("chuyenCV").textContent = tiepCV.gio;
    document.getElementById("conDB").textContent = tiepDB.mai
      ? "Chuyến đầu tiên ngày mai" : "Còn khoảng " + tiepDB.con + " phút nữa";
    document.getElementById("conCV").textContent = tiepCV.mai
      ? "Chuyến đầu tiên ngày mai" : "Còn khoảng " + tiepCV.con + " phút nữa";
  }
}

// ===== KHUNG CHIA SE (chi hien trong muc Thong bao khi CHUA co thong bao moi) =====
// Thay dong mac dinh "Hien chua co thong bao moi..." bang khung chia se.
// Khi co thong bao that (su co / dong bang lich vi gio / co tay) thi thong bao
// van hien nhu cu va thang khung chia se nay. Nut Zalo mo zalo.me vi Zalo
// khong co endpoint chia se web cong khai (chi co widget JS can tai khoan OA);
// Instagram va TikTok cung khong co web share intent chinh thuc nen mo trang chu.
function htmlKhungChiaSe() {
  var urlTrang = "https://www.benphadongbai.io.vn/";
  var chu = "Lịch phà Đồng Bài – Cái Viềng (đi Cát Bà): xem giờ chạy, giá vé và thông báo mới nhất";
  var u = encodeURIComponent(urlTrang);
  var t = encodeURIComponent(chu);
  var nut = [
    { ten: "Zalo", lop: "csZalo", link: "https://zalo.me/", path: "M12.49 10.2722v-.4496h1.3467v6.3218h-.7704a.576.576 0 01-.5763-.5729l-.0006.0005a3.273 3.273 0 01-1.9372.6321c-1.8138 0-3.2844-1.4697-3.2844-3.2823 0-1.8125 1.4706-3.2822 3.2844-3.2822a3.273 3.273 0 011.9372.6321l.0006.0005zM6.9188 7.7896v.205c0 .3823-.051.6944-.2995 1.0605l-.03.0343c-.0542.0615-.1815.206-.2421.2843L2.024 14.8h4.8948v.7682a.5764.5764 0 01-.5767.5761H0v-.3622c0-.4436.1102-.6414.2495-.8476L4.8582 9.23H.1922V7.7896h6.7266zm8.5513 8.3548a.4805.4805 0 01-.4803-.4798v-7.875h1.4416v8.3548H15.47zM20.6934 9.6C22.52 9.6 24 11.0807 24 12.9044c0 1.8252-1.4801 3.306-3.3066 3.306-1.8264 0-3.3066-1.4808-3.3066-3.306 0-1.8237 1.4802-3.3044 3.3066-3.3044zm-10.1412 5.253c1.0675 0 1.9324-.8645 1.9324-1.9312 0-1.065-.865-1.9295-1.9324-1.9295s-1.9324.8644-1.9324 1.9295c0 1.0667.865 1.9312 1.9324 1.9312zm10.1412-.0033c1.0737 0 1.945-.8707 1.945-1.9453 0-1.073-.8713-1.9436-1.945-1.9436-1.0753 0-1.945.8706-1.945 1.9436 0 1.0746.8697 1.9453 1.945 1.9453z" },
    { ten: "Facebook", lop: "csFacebook", link: "https://www.facebook.com/sharer/sharer.php?u=" + u, path: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" },
    { ten: "X (Twitter)", lop: "csX", link: "https://twitter.com/intent/tweet?url=" + u + "&text=" + t, path: "M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" },
    { ten: "Instagram", lop: "csInstagram", link: "https://www.instagram.com/", path: "M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077" },
    { ten: "TikTok", lop: "csTikTok", link: "https://www.tiktok.com/", path: "M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" },
    { ten: "Weibo", lop: "csWeibo", link: "https://service.weibo.com/share/share.php?url=" + u + "&title=" + t, path: "M10.098 20.323c-3.977.391-7.414-1.406-7.672-4.02-.259-2.609 2.759-5.047 6.74-5.441 3.979-.394 7.413 1.404 7.671 4.018.259 2.6-2.759 5.049-6.737 5.439l-.002.004zM9.05 17.219c-.384.616-1.208.884-1.829.602-.612-.279-.793-.991-.406-1.593.379-.595 1.176-.861 1.793-.601.622.263.82.972.442 1.592zm1.27-1.627c-.141.237-.449.353-.689.253-.236-.09-.313-.361-.177-.586.138-.227.436-.346.672-.24.239.09.315.36.18.601l.014-.028zm.176-2.719c-1.893-.493-4.033.45-4.857 2.118-.836 1.704-.026 3.591 1.886 4.21 1.983.64 4.318-.341 5.132-2.179.8-1.793-.201-3.642-2.161-4.149zm7.563-1.224c-.346-.105-.57-.18-.405-.615.375-.977.42-1.804 0-2.404-.781-1.112-2.915-1.053-5.364-.03 0 0-.766.331-.571-.271.376-1.217.315-2.224-.27-2.809-1.338-1.337-4.869.045-7.888 3.08C1.309 10.87 0 13.273 0 15.348c0 3.981 5.099 6.395 10.086 6.395 6.536 0 10.888-3.801 10.888-6.82 0-1.822-1.547-2.854-2.915-3.284v.01zm1.908-5.092c-.766-.856-1.908-1.187-2.96-.962-.436.09-.706.511-.616.932.09.42.511.691.932.602.511-.105 1.067.044 1.442.465.376.421.466.977.316 1.473-.136.406.089.856.51.992.405.119.857-.105.992-.512.33-1.021.12-2.178-.646-3.035l.03.045zm2.418-2.195c-1.576-1.757-3.905-2.419-6.054-1.968-.496.104-.812.587-.706 1.081.104.496.586.813 1.082.707 1.532-.331 3.185.15 4.296 1.383 1.112 1.246 1.429 2.943.947 4.416-.165.48.106 1.007.586 1.157.479.165.991-.104 1.157-.586.675-2.088.241-4.478-1.338-6.235l.03.045z" },
    { ten: "QQ", lop: "csQQ", link: "https://connect.qq.com/widget/shareqq/index.html?url=" + u + "&title=" + t, path: "M21.395 15.035a40 40 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 17.351 0 12 0S4.474 4.632 4.474 9.241c0 .274.013.804.014.836l-1.08 2.695a39 39 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673.54.065 2.103-2.472 2.103-2.472 0 1.469.756 3.387 2.394 4.771-.612.188-1.363.479-1.845.835-.434.32-.379.646-.301.778.343.578 5.883.369 7.482.189 1.6.18 7.14.389 7.483-.189.078-.132.132-.458-.301-.778-.483-.356-1.233-.646-1.846-.836 1.637-1.384 2.393-3.302 2.393-4.771 0 0 1.563 2.537 2.103 2.472.251-.03.581-1.39-.438-4.673" }
  ];
  var html = "<div class='khungChiaSe'><p class='dongChiaSe'>Hãy Chia Sẻ Link Website Giúp Tôi</p><div class='hangChiaSe'>";
  for (var i = 0; i < nut.length; i++) {
    html += "<a class='nutChiaSe " + nut[i].lop + "' href='" + nut[i].link + "' target='_blank' rel='noopener' title='" + nut[i].ten + "' aria-label='Mở " + nut[i].ten + " để chia sẻ'><svg viewBox='0 0 24 24' aria-hidden='true'><path d='" + nut[i].path + "'/></svg></a>";
  }
  html += "</div></div>";
  return html;
}

function veTheDanhSach(ds, id, cauTrong) {
  var el = document.getElementById(id);
  if (ds.length === 0) {
    if (id === "danhSachThongBao") { el.innerHTML = htmlKhungChiaSe(); return; }
    el.innerHTML = "<p class='ghiChuNho'>" + cauTrong + "</p>"; return;
  }
  var html = "";
  for (var i = 0; i < ds.length; i++) {
    var d = ds[i];
    var cls = d.loai === "khan" ? "theThongBao khan" : "theThongBao";
    html += "<div class='" + cls + "'><div class='tieuDe'>" + d.tieuDe + "</div>" +
      (d.ngay ? "<div class='ngay'>" + d.ngay + "</div>" : "") +
      "<div>" + d.noiDung + "</div></div>";
  }
  el.innerHTML = html;
}

function veGiaVe() {
  var el = document.getElementById("bangGia");
  var html = "";
  for (var g = 0; g < bangGiaVe.length; g++) {
    html += "<h3>" + bangGiaVe[g].nhom + "</h3>";
    if (bangGiaVe[g].ghiChu) {
      html += "<p class='ghiChuNho'>" + bangGiaVe[g].ghiChu + "</p>";
    }
    var muc = bangGiaVe[g].muc;
    for (var i = 0; i < muc.length; i++) {
      html += "<div class='theGia'><span>" + muc[i].loaiXe + "</span><span class='gia'>" + muc[i].gia + "</span></div>";
    }
  }
  el.innerHTML = html;
}

function veNhomFB() {
  var el = document.getElementById("nhomFB");
  if (nhomFacebook.length === 0) {
    el.innerHTML = "<p class='ghiChuNho'>Danh sách hội nhóm đang được bổ sung.</p>";
    return;
  }
  var html = "";
  for (var i = 0; i < nhomFacebook.length; i++) {
    html += "<a class='nutFB' href='" + nhomFacebook[i].link + "' target='_blank'>" + nhomFacebook[i].ten + "</a>";
  }
  el.innerHTML = html;
}

function veTatCa() {
  veBangLich();
  veTheDanhSach(dsThongBaoHienThi(), "danhSachThongBao", "Hiện chưa có thông báo mới. Bến hoạt động bình thường theo lịch.");
  veTheDanhSach(thongBaoLeTet, "danhSachLeTet", "Hiện chưa có thông báo lịch Lễ – Tết mới. Bến chạy theo lịch thường ngày.");
  veGiaVe();
}

window.onload = function () {
  veTatCa();
  khoiDongThoiTiet();
  taiTiGiaVang();
  taiGiaXangDau();
  taiThuyTrieu();
  demLuotXem();
  setInterval(veBangLich, 30000); // cap nhat dem nguoc moi 30 giay
};

// ===== THOI TIET (du lieu Open-Meteo, mien phi, khong can tai khoan) =====
// Mac dinh: khu vuc Ben Dong Bai - Cat Hai. Bam nut de xem theo vi tri hien tai.
var VI_TRI_BEN = { lat: 20.815, lon: 106.887, ten: "Khu vực Bến Đồng Bài — Cát Hải" };

function maThoiTiet(code) {
  if (code === 0) return { txt: "Trời quang", icon: "☀️" };
  if (code === 1) return { txt: "Nắng nhẹ", icon: "🌤️" };
  if (code === 2) return { txt: "Có mây", icon: "⛅" };
  if (code === 3) return { txt: "Nhiều mây", icon: "☁️" };
  if (code === 45 || code === 48) return { txt: "Sương mù", icon: "🌫️" };
  if (code >= 51 && code <= 57) return { txt: "Mưa phùn", icon: "🌦️" };
  if (code === 61) return { txt: "Mưa nhỏ", icon: "🌧️" };
  if (code === 63) return { txt: "Mưa vừa", icon: "🌧️" };
  if (code === 65 || code === 66 || code === 67) return { txt: "Mưa to", icon: "🌧️" };
  if ((code >= 71 && code <= 77) || code === 85 || code === 86) return { txt: "Có tuyết", icon: "❄️" };
  if (code >= 80 && code <= 82) return { txt: "Mưa rào", icon: "🌦️" };
  if (code === 95 || code === 96 || code === 99) return { txt: "Dông", icon: "⛈️" };
  return { txt: "—", icon: "🌡️" };
}

// Doi toc do gio km/h -> m/s (dinh dang dau phay) va cap gio Beaufort
function dangMs(kmh) { return (Math.round(kmh / 3.6 * 10) / 10).toString().replace(".", ","); }
function capGio(ms) {
  var nguong = [0.3, 1.6, 3.4, 5.5, 8.0, 10.8, 13.9, 17.2, 20.8, 24.5, 28.5, 32.7];
  for (var i = nguong.length - 1; i >= 0; i--) { if (ms >= nguong[i]) return i + 1; }
  return 0;
}

function taiThoiTiet(lat, lon, tenNoi) {
  var el = document.getElementById("thoiTietMini");
  if (!el) return;
  el.innerHTML = "<p class='ghiChuNho'>Đang tải…</p>";
  var url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon
    + "&current=temperature_2m,weather_code,wind_speed_10m,wind_gusts_10m"
    + "&minutely_15=wind_speed_10m,wind_gusts_10m&hourly=wind_speed_10m,wind_gusts_10m"
    + "&timezone=auto&models=icon_seamless&forecast_days=1";
  fetch(url).then(function (r) { return r.json(); }).then(function (d) {
    var c = d.current;
    var tt = maThoiTiet(c.weather_code);
    el.innerHTML = "<div class='ttDong1'><span class='ttIconM'>" + tt.icon + "</span>"
      + "<span class='ttNhietM'>" + Math.round(c.temperature_2m) + "°</span></div>"
      + "<div class='ttMoTaM'>" + tt.txt + " · 💨 " + dangMs(c.wind_speed_10m) + " m/s — gió cấp " + capGio(c.wind_speed_10m / 3.6) + " (giật " + dangMs(c.wind_gusts_10m) + " m/s)</div>"
      + "<div class='ttNoiM'>📍 " + tenNoi + "</div>"
      + "<div class='ghiChuNho'>Số liệu gió là dự báo theo mô hình Open-Meteo, không phải số đo tại bến — gió thực tế có thể chênh lệch.</div>";
    // Chi danh gia dong bang tu dong theo so gio cua TRAM BEN mac dinh,
    // khong theo vi tri ca nhan cua khach.
    if (String(lat) === String(VI_TRI_BEN.lat) && String(lon) === String(VI_TRI_BEN.lon)) {
      danhGiaDongBangTuDong(c, d);
    }
  }).catch(function () {
    el.innerHTML = "<p class='ghiChuNho'>Không tải được. Kiểm tra mạng rồi mở lại trang.</p>";
  });
}

function khoiDongThoiTiet() {
  taiThoiTiet(VI_TRI_BEN.lat, VI_TRI_BEN.lon, VI_TRI_BEN.ten);
  var nut = document.getElementById("nutViTri");
  if (nut) nut.addEventListener("click", function () {
    if (!navigator.geolocation) { alert("Thiết bị không hỗ trợ định vị."); return; }
    nut.textContent = "📍 Đang lấy vị trí…";
    navigator.geolocation.getCurrentPosition(function (pos) {
      nut.textContent = "📍 Xem theo vị trí của tôi";
      var lat = pos.coords.latitude, lon = pos.coords.longitude;
      taiThoiTiet(lat.toFixed(3), lon.toFixed(3), "Vị trí hiện tại của bạn");
      fetch("https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" + lat + "&longitude=" + lon + "&localityLanguage=vi")
        .then(function (r) { return r.json(); })
        .then(function (g) {
          var ten = g.locality || g.city || "";
          var vung = g.principalSubdivision || "";
          var nhan = ten ? ("Vị trí của bạn — " + ten + (vung && vung !== ten ? ", " + vung : "")) : "";
          if (nhan) {
            var elNoi = document.querySelector("#thoiTietMini .ttNoiM");
            if (elNoi) elNoi.textContent = "📍 " + nhan;
          }
        })
        .catch(function () { /* khong lay duoc ten noi thi giu nhan mac dinh */ });
    }, function () {
      nut.textContent = "📍 Xem theo vị trí của tôi";
      alert("Chưa lấy được vị trí. Cách mở quyền: chạm biểu tượng ghim/ổ khóa ở đầu thanh địa chỉ của trình duyệt → Quyền (Permissions) → Vị trí (Location) → chọn Cho phép, rồi bấm lại nút này.");
    }, { enableHighAccuracy: true, timeout: 20000, maximumAge: 60000 });
  });
}

// ===== TI GIA + GIA VANG (tham khao thi truong quoc te) =====
// Nguon: open.er-api.com (ti gia theo USD) + gold-api.com (vang the gioi, truc tiep).
function dinhDangSo(n) { return Math.round(n).toLocaleString("vi-VN"); }

function taiTiGiaVang() {
  var el = document.getElementById("tiGiaVang");
  if (!el) return;
  var pFX = fetch("https://open.er-api.com/v6/latest/USD").then(function (r) { return r.json(); });
  var pVang = fetch("https://api.gold-api.com/price/XAU").then(function (r) { return r.json(); });
  Promise.all([pFX, pVang]).then(function (kq) {
    var fx = kq[0], vang = kq[1], r = fx.rates, usdVnd = r.VND;
    function sangVnd(code) { return usdVnd / r[code]; }
    // 1 luong = 37.5g; 1 ounce troy = 31.1035g -> he so quy doi 1.20565
    var vangLuong = Math.round(vang.price * usdVnd * 1.20565 / 1000) * 1000;
    var html = ""
      + "<div class='theGia'><span>🥇 Vàng thế giới</span><span class='gia'>" + dinhDangSo(vang.price) + " USD/oz</span></div>"
      + "<div class='theGia'><span>🥇 Vàng quy đổi</span><span class='gia'>≈ " + dinhDangSo(vangLuong) + " đ/lượng</span></div>"
      + "<div class='theGia'><span>🇺🇸 Đô la Mỹ (USD)</span><span class='gia'>" + dinhDangSo(usdVnd) + " đ</span></div>"
      + "<div class='theGia'><span>🇪🇺 Euro (EUR)</span><span class='gia'>" + dinhDangSo(sangVnd("EUR")) + " đ</span></div>"
      + "<div class='theGia'><span>🇨🇳 Nhân dân tệ (CNY)</span><span class='gia'>" + dinhDangSo(sangVnd("CNY")) + " đ</span></div>"
      + "<div class='theGia'><span>🇬🇧 Bảng Anh (GBP)</span><span class='gia'>" + dinhDangSo(sangVnd("GBP")) + " đ</span></div>";
    el.innerHTML = html;
    var nguon = document.getElementById("nguonTiGia");
    if (nguon) {
      nguon.textContent = "Tỉ giá tham khảo thị trường quốc tế, cập nhật " + new Date(fx.time_last_update_utc).toLocaleDateString("vi-VN")
        + ". Giá vàng là vàng thế giới quy đổi — không phải giá mua bán SJC tại quầy.";
    }
  }).catch(function () {
    el.innerHTML = "<p class='ghiChuNho'>Không tải được tỉ giá — giá vàng. Kiểm tra kết nối mạng rồi mở lại trang.</p>";
  });
}

// ===== GIA XANG DAU (tram gia-ca tren VPS cua chu ben, nguon VTC/Petrolimex) =====
// Trang tinh khong tu lay duoc trang Petrolimex/VTC (CORS + chan bot) nen may chu
// VPS lam tram trung chuyen: lay bang gia, boc tach, tra JSON tai gia.hialo.vn.
// Neu chua ket noi duoc tram gia, hien bang gia du phong cua ky dieu hanh gan nhat.
var GIA_XANG_DU_PHONG = {
  capNhat: "29/10/2026 15:00",
  duLieu: [
    { ten: "Xăng E10 RON 95 Mức 3", vung1: 25730, donVi: "lít" },
    { ten: "Xăng E5 RON 92 Mức 2", vung1: 26020, donVi: "lít" },
    { ten: "Xăng E10 RON 95 Mức 5", vung1: 26530, donVi: "lít" },
    { ten: "Điêzen 0,05S Mức 2", vung1: 30240, donVi: "lít" },
    { ten: "Điêzen 0,001S Mức 5", vung1: 31640, donVi: "lít" },
    { ten: "Dầu hỏa 2 - K", vung1: 30650, donVi: "lít" }
  ]
};
var THU_TU_XANG = [
  { chua: "RON 95 Mức 3", nhan: "⛽ Xăng RON 95-III (E10)" },
  { chua: "E5 RON 92", nhan: "⛽ Xăng E5 RON 92" },
  { chua: "RON 95 Mức 5", nhan: "⛽ Xăng RON 95-V (E10)" },
  { chua: "0,05S", nhan: "🛢️ Dầu diesel 0,05S" },
  { chua: "0,001S", nhan: "🛢️ Dầu diesel 0,001S" },
  { chua: "Dầu hỏa", nhan: "🛢️ Dầu hỏa" }
];

function veGiaXang(el, kq, laDuPhong) {
  var html = "";
  THU_TU_XANG.forEach(function (muc) {
    for (var i = 0; i < kq.duLieu.length; i++) {
      var d = kq.duLieu[i];
      if (d.donVi === "lít" && d.ten.indexOf(muc.chua) >= 0) {
        html += "<div class='theGia'><span>" + muc.nhan + "</span><span class='gia'>"
          + dinhDangSo(d.vung1) + " đ/lít</span></div>";
        break;
      }
    }
  });
  if (!html) throw new Error("khong co dong gia nao");
  el.innerHTML = html;
  var nguon = document.getElementById("nguonGiaXang");
  if (nguon) {
    nguon.textContent = laDuPhong
      ? "Đang hiển thị bảng giá dự phòng — kỳ điều hành " + kq.capNhat + " (Petrolimex, vùng 1). Giá vùng 2 (vùng xa) cao hơn khoảng 500–600 đ/lít."
      : "Giá bán lẻ Petrolimex vùng 1 (áp dụng khu vực Hải Phòng), kỳ điều hành " + kq.capNhat + ". Nguồn: VTC News. Giá vùng 2 (vùng xa) cao hơn khoảng 500–600 đ/lít.";
  }
}

function taiGiaXangDau() {
  var el = document.getElementById("giaXangDau");
  if (!el) return;
  fetch("https://gia.hialo.vn/gia-xang")
    .then(function (r) { return r.json(); })
    .then(function (kq) {
      if (!kq || !kq.ok || !kq.duLieu) throw new Error("du lieu khong hop le");
      veGiaXang(el, kq, false);
    })
    .catch(function () {
      try { veGiaXang(el, GIA_XANG_DU_PHONG, true); }
      catch (e) { el.innerHTML = "<p class='ghiChuNho'>Không tải được giá xăng dầu. Kiểm tra kết nối mạng rồi mở lại trang.</p>"; }
    });
}

// ===== LUOT XEM TRANG (may chu rieng gia.hialo.vn: 1 thiet bi/IP chi tinh 1 luot moi ngay, tai lai trang khong tang) =====
function demLuotXem() {
  fetch("https://gia.hialo.vn/luot-xem")
    .then(function (r) { return r.json(); })
    .then(function (j) {
      var elTong = document.getElementById("tongXem");
      var elNgay = document.getElementById("xemHomNay");
      if (elTong && typeof j.tong === "number") elTong.textContent = j.tong.toLocaleString("vi-VN");
      if (elNgay && typeof j.homNay === "number") elNgay.textContent = j.homNay.toLocaleString("vi-VN");
    })
    .catch(function () { /* khong tai duoc thi giu nguyen dau — */ });
}

// ===== THUY TRIEU NHIEU TRAM (du lieu tu tram gia.hialo.vn/thuy-trieu?tram=...) =====
var TRIEU = { ngay: [], chiSo: 0, tram: "hon-dau", daGanChon: false };

function dinhDangMuc(v) { return v.toFixed(1) + "m"; }

function veThuyTrieu() {
  var el = document.getElementById("thuyTrieu");
  if (!el || !TRIEU.ngay.length) return;
  var n = TRIEU.ngay[TRIEU.chiSo];
  var gio = n.gio;
  var cao = Math.max.apply(null, gio), thap = Math.min.apply(null, gio);
  var gioCao = gio.indexOf(cao), gioThap = gio.indexOf(thap);
  var d = new Date();
  function haiSo(x) { return (x < 10 ? "0" : "") + x; }
  var homNay = haiSo(d.getDate()) + "/" + haiSo(d.getMonth() + 1) + "/" + d.getFullYear();
  var laHomNay = n.duong === homNay;
  var html = "<div class='trieuDau'>"
    + "<button type='button' class='nutTrieu' id='trieuTruoc'" + (TRIEU.chiSo <= 0 ? " disabled" : "") + ">‹ Trước</button>"
    + "<div class='trieuNgay'><strong>" + (laHomNay ? "Hôm nay " : "") + n.duong + "</strong>"
    + (n.am ? "<span>Âm lịch " + n.am + "</span>" : "") + "</div>"
    + "<button type='button' class='nutTrieu' id='trieuSau'" + (TRIEU.chiSo >= TRIEU.ngay.length - 1 ? " disabled" : "") + ">Sau ›</button>"
    + "</div>";
  html += "<p class='trieuCucTri'>Đỉnh triều <strong>" + dinhDangMuc(cao) + "</strong> lúc " + gioCao + "h · Chân triều <strong>" + dinhDangMuc(thap) + "</strong> lúc " + gioThap + "h</p>";
  html += "<div class='trieuBang'>";
  for (var h = 0; h < 24; h++) {
    var rong = Math.max(4, Math.round(gio[h] / cao * 100));
    html += "<div class='trieuHang" + (laHomNay && h === d.getHours() ? " gioNay" : "") + "'>"
      + "<span class='trieuGio'>" + h + "h</span>"
      + "<div class='trieuThanh'><div class='trieuMuc' style='width:" + rong + "%'></div></div>"
      + "<span class='trieuSo'>" + dinhDangMuc(gio[h]) + "</span></div>";
  }
  html += "</div>";
  el.innerHTML = html;
  var bT = document.getElementById("trieuTruoc"), bS = document.getElementById("trieuSau");
  if (bT) bT.onclick = function () { if (TRIEU.chiSo > 0) { TRIEU.chiSo--; veThuyTrieu(); } };
  if (bS) bS.onclick = function () { if (TRIEU.chiSo < TRIEU.ngay.length - 1) { TRIEU.chiSo++; veThuyTrieu(); } };
}

function taiThuyTrieu() {
  var el = document.getElementById("thuyTrieu");
  if (!el) return;
  var chon = document.getElementById("chonTramTrieu");
  if (!TRIEU.daGanChon && chon) {
    TRIEU.daGanChon = true;
    try {
      var daLuu = localStorage.getItem("pha_tram_trieu");
      if (daLuu) { TRIEU.tram = daLuu; chon.value = daLuu; }
    } catch (e) { /* trinh duyet chan localStorage thi bo qua */ }
    chon.addEventListener("change", function () {
      TRIEU.tram = chon.value;
      try { localStorage.setItem("pha_tram_trieu", TRIEU.tram); } catch (e) { /* bo qua */ }
      TRIEU.ngay = [];
      el.innerHTML = "<p class='ghiChuNho'>Đang tải lịch thủy triều…</p>";
      taiThuyTrieu();
    });
  }
  fetch("https://gia.hialo.vn/thuy-trieu?tram=" + encodeURIComponent(TRIEU.tram))
    .then(function (r) { return r.json(); })
    .then(function (kq) {
      if (!kq || !kq.ok || !kq.ngay || !kq.ngay.length) throw new Error("du lieu khong hop le");
      TRIEU.ngay = kq.ngay;
      var d = new Date();
      function haiSo(x) { return (x < 10 ? "0" : "") + x; }
      var homNay = haiSo(d.getDate()) + "/" + haiSo(d.getMonth() + 1) + "/" + d.getFullYear();
      TRIEU.chiSo = 0;
      for (var i = 0; i < kq.ngay.length; i++) { if (kq.ngay[i].duong === homNay) { TRIEU.chiSo = i; break; } }
      veThuyTrieu();
      var tenTram = document.getElementById("trieuTenTram");
      if (tenTram && kq.tram) tenTram.textContent = kq.tram;
      var nguon = document.getElementById("nguonThuyTrieu");
      if (nguon) nguon.textContent = "Trạm " + (kq.tram || "") + " — nguồn: thegioimoicau.com. Mực nước theo giờ, đơn vị mét; xem được khoảng 2 tuần tới bằng nút Sau. Các quận, huyện của TP.HCM xem chung trạm Sài Gòn hoặc Cần Giờ.";
    })
    .catch(function () {
      el.innerHTML = "<p class='ghiChuNho'>Không tải được lịch thủy triều. Kiểm tra kết nối mạng rồi mở lại trang.</p>";
    });
}

// ===== CAI DAT UNG DUNG (PWA) =====
var suKienCaiApp = null;
window.addEventListener("beforeinstallprompt", function (e) { e.preventDefault(); suKienCaiApp = e; });
window.addEventListener("load", function () {
  var khoi = document.getElementById("khoiCaiApp");
  if (!khoi) return;
  if (window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone) { khoi.style.display = "none"; return; }
  var nut = document.getElementById("nutCaiApp");
  var hd = document.getElementById("caiAppHd");
  if (!nut) return;
  nut.addEventListener("click", function () {
    if (suKienCaiApp) {
      suKienCaiApp.prompt();
      suKienCaiApp.userChoice.then(function () { suKienCaiApp = null; });
    } else if (hd) {
      hd.style.display = "block";
      hd.textContent = "Cách cài thủ công: chạm nút ⋮ ở góc phải trên của Chrome → chọn “Cài đặt ứng dụng” (hoặc “Thêm vào màn hình chính”) → Cài đặt. Trên iPhone: bấm nút Chia sẻ → “Thêm vào Màn hình chính”.";
    }
  });
});

// ===== NUT VE DAU TRANG (BACK TO TOP) =====
window.addEventListener("load", function () {
  var nut = document.createElement("button");
  nut.type = "button";
  nut.id = "nutVeDau";
  nut.innerHTML = "⬆";
  nut.setAttribute("aria-label", "Về đầu trang");
  document.body.appendChild(nut);
  function capNhat() { nut.style.display = window.scrollY > 300 ? "block" : "none"; }
  window.addEventListener("scroll", capNhat, { passive: true });
  capNhat();
  nut.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
});

// ===== TIM KIEM TRONG TRANG (kieu Google: go la goi y, bam la nhay toi muc) =====
function boDauTiengViet(s) {
  return (s || "").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/đ/g, "d").replace(/Đ/g, "D");
}
var MUC_TIM_KIEM = [
  { t: "⛴️ Chuyến tiếp theo", kw: "chuyen tiep theo pha sap chay con bao lau", muc: "mucChuyen" },
  { t: "🕐 Lịch chạy trong ngày", kw: "lich chay bang gio gio pha dong bai cai vieng", muc: "mucLich" },
  { t: "🎫 Giá vé phà", kw: "gia ve bang gia tien ve", muc: "mucGiaVe" },
  { t: "🌦️ Thời tiết ở bến", kw: "thoi tiet gio cap gio mua nang nhiet do", muc: "mucThoiTiet" },
  { t: "💰 Tỉ giá — Giá vàng · Giá xăng dầu & giá gạo", kw: "ti gia gia vang usd ngoai te vang xang dau gao petrolimex ron", muc: "mucTiGia" },
  { t: "🌊 Thủy triều", kw: "thuy trieu muc nuoc dinh trieu chan trieu con nuoc", muc: "mucTrieu" },
  { t: "🧧 Thông báo Lễ – Tết", kw: "le tet lich nghi", muc: "mucLeTet" },
  { t: "⚠️ Thông báo của bến", kw: "thong bao su co tam dung bao gio dong ben", muc: "mucThongBao" },
  { t: "📱 Cài đặt ứng dụng", kw: "cai dat ung dung app man hinh chinh tai app", muc: "khoiCaiApp" },
  { t: "📍 HIALO — tìm người quanh đây (web liên kết)", kw: "hialo tim nguoi quanh day ket ban nhan tin goi video", href: "https://www.hialo.vn" },
  { t: "📰 Kinh nghiệm du lịch Cát Bà tự túc", kw: "du lich cat ba kinh nghiem lich trinh dao cat ba", href: "bai-viet/du-lich-cat-ba.html", cungTrang: true },
  { t: "📰 Du lịch Hải Phòng: đi đâu, ăn gì, chơi gì", kw: "du lich hai phong an gi choi gi do son hon dau", href: "bai-viet/du-lich-hai-phong.html", cungTrang: true },
  { t: "📰 Bến phà Đồng Bài: giờ chạy & giá vé (bài viết)", kw: "ben pha dong bai gio chay gia ve kinh nghiem", href: "bai-viet/ben-pha-dong-bai-cai-vieng.html", cungTrang: true },
  { t: "📰 Bãi tắm đẹp nhất vịnh Lan Hạ", kw: "bai tam dep nhat vinh lan ha cat co dao khi ba trai dao", href: "bai-viet/bai-tam-dep-nhat-vinh-lan-ha.html", cungTrang: true },
  { t: "📰 Đảo có bãi tắm đẹp nhất vịnh Hạ Long", kw: "dao bai tam dep nhat vinh ha long ti top soi sim", href: "bai-viet/dao-bai-tam-dep-nhat-vinh-ha-long.html", cungTrang: true },
  { t: "📰 Vườn quốc gia Cát Bà", kw: "vuon quoc gia cat ba trekking ngu lam vooc", href: "bai-viet/vuon-quoc-gia-cat-ba.html", cungTrang: true },
  { t: "📰 Pháo đài Thần Công Cát Bà", kw: "phao dai than cong hoang hon cao diem 177", href: "bai-viet/phao-dai-than-cong.html", cungTrang: true },
  { t: "📰 Tất cả bài viết cẩm nang du lịch", kw: "bai viet cam nang tin tuc huong dan du lich", href: "bai-viet/", cungTrang: true }
];
var TRAM_TIM_KIEM = [
  ["hon-dau", "Hòn Dấu"], ["hong-gai", "Hồng Gai"], ["cua-ong", "Cửa Ông"],
  ["cua-viet", "Cửa Việt"], ["cua-hoi", "Cửa Hội"], ["cua-gianh", "Cửa Gianh"],
  ["da-nang", "Đà Nẵng"], ["quy-nhon", "Quy Nhơn"], ["nha-trang", "Nha Trang"],
  ["vung-tau", "Vũng Tàu"], ["can-gio", "Cần Giờ"], ["sai-gon", "Sài Gòn"],
  ["dinh-an", "Định An"], ["ha-tien", "Hà Tiên"], ["truong-sa", "Trường Sa"]
];

function khoiDongTimKiem() {
  var o = document.getElementById("oTimKiem");
  var hop = document.getElementById("goiYTimKiem");
  if (!o || !hop) return;
  var mucGia = [];
  if (typeof bangGiaVe !== "undefined") {
    bangGiaVe.forEach(function (nhom) {
      (nhom.muc || []).forEach(function (m) {
        mucGia.push({ t: "🎫 " + m.loaiXe + " — " + m.gia, kw: "gia ve " + boDauTiengViet(m.loaiXe), muc: "mucGiaVe" });
      });
    });
  }
  var tatCa = MUC_TIM_KIEM.concat(mucGia).concat(TRAM_TIM_KIEM.map(function (c) {
    return { t: "🌊 Thủy triều " + c[1], kw: "thuy trieu " + boDauTiengViet(c[1]), tram: c[0], muc: "mucTrieu" };
  }));
  function denMuc(m) {
    hop.style.display = "none";
    o.blur();
    if (m.href) {
      if (m.cungTrang) { window.location.href = m.href; }
      else { window.open(m.href, "_blank", "noopener"); }
      return;
    }
    if (m.tram) {
      var chon = document.getElementById("chonTramTrieu");
      if (chon && chon.value !== m.tram) {
        chon.value = m.tram;
        chon.dispatchEvent(new Event("change"));
      }
    }
    var el = document.getElementById(m.muc);
    if (el) {
      el.classList.remove("dongGon");
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(function () { el.classList.add("mucNoiBat"); }, 350);
      setTimeout(function () { el.classList.remove("mucNoiBat"); }, 3600);
    }
  }
  function veGoiY() {
    var tho = o.value.trim();
    var q = boDauTiengViet(tho);
    if (q.length < 2) { hop.style.display = "none"; return; }
    var thay = tatCa.filter(function (m) {
      return boDauTiengViet(m.t).indexOf(q) >= 0 || boDauTiengViet(m.kw).indexOf(q) >= 0;
    }).slice(0, 8);
    hop.innerHTML = "";
    if (!thay.length) {
      var kc = document.createElement("div");
      kc.className = "khongCo";
      kc.textContent = "Không thấy trong trang — tìm trên Google bên dưới:";
      hop.appendChild(kc);
    }
    thay.forEach(function (m) {
      var b = document.createElement("button");
      b.type = "button";
      b.textContent = m.t;
      b.addEventListener("click", function () { denMuc(m); });
      hop.appendChild(b);
    });
    var bg = document.createElement("button");
    bg.type = "button";
    bg.textContent = "🌐 Tìm \u201C" + tho + "\u201D trên Google";
    bg.addEventListener("click", function () {
      hop.style.display = "none";
      window.open("https://www.google.com/search?q=" + encodeURIComponent(tho), "_blank", "noopener");
    });
    hop.appendChild(bg);
    hop.style.display = "block";
  }
  o.addEventListener("input", veGoiY);
  o.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      e.preventDefault();
      var b = hop.querySelector("button");
      if (b) b.click();
    }
  });
  document.addEventListener("click", function (e) {
    if (!hop.contains(e.target) && e.target !== o) hop.style.display = "none";
  });
}
window.addEventListener("load", khoiDongTimKiem);

// ===== MENU LUOI + THE XEP GON (trang ngan gon, cham la mo) =====
var THE_GON_MAC_DINH = ["mucGiaVe", "mucTiGia", "mucTrieu", "mucLeTet", "khoiCaiApp"];
function khoiDongGonThe() {
  document.querySelectorAll(".khoi").forEach(function (the) {
    var h2 = the.querySelector(":scope > h2");
    if (!h2 || the.id === "mucChuyen") return;
    h2.classList.add("dauGon");
    if (THE_GON_MAC_DINH.indexOf(the.id) >= 0) the.classList.add("dongGon");
    h2.addEventListener("click", function () { the.classList.toggle("dongGon"); });
  });
  document.querySelectorAll(".menuLuoi button[data-mo]").forEach(function (nut) {
    nut.addEventListener("click", function () {
      var el = document.getElementById(nut.getAttribute("data-mo"));
      if (!el) return;
      el.classList.remove("dongGon");
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
}
if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", khoiDongGonThe);
else khoiDongGonThe();
