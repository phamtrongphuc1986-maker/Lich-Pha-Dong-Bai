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

function veBangLich() {
  var bayGio = new Date();
  var phut = bayGio.getHours() * 60 + bayGio.getMinutes();

  var dsDB = lichPha.map(function (d) { return { gio: d.dongBai, loai: d.loai, dacBiet: false }; });
  chuyenPhatSinhDB.forEach(function (ps) { dsDB.push({ gio: ps.gio, loai: "lon", dacBiet: true, nhan: ps.nhan }); });
  dsDB.sort(function (a, b) { return thanhPhut(a.gio) - thanhPhut(b.gio); });
  var dsCV = lichPha.map(function (d) { return { gio: d.caiVieng, loai: d.loai, dacBiet: false }; });
  var tiepDB = chuyenTiepTheo(dsDB, phut);
  var tiepCV = chuyenTiepTheo(dsCV, phut);

  function bang(ds, tiep) {
    var html = "<table><tr><th>Giờ khởi hành</th><th>Loại phà</th></tr>";
    for (var i = 0; i < ds.length; i++) {
      var cls = (!tiep.mai && ds[i].gio === tiep.gio) ? " class='sapChay'" : "";
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
  document.getElementById("chuyenDB").textContent = tiepDB.gio;
  document.getElementById("chuyenCV").textContent = tiepCV.gio;
  document.getElementById("conDB").textContent = tiepDB.mai
    ? "Chuyến đầu tiên ngày mai" : "Còn khoảng " + tiepDB.con + " phút nữa";
  document.getElementById("conCV").textContent = tiepCV.mai
    ? "Chuyến đầu tiên ngày mai" : "Còn khoảng " + tiepCV.con + " phút nữa";
}

function veTheDanhSach(ds, id, cauTrong) {
  var el = document.getElementById(id);
  if (ds.length === 0) { el.innerHTML = "<p class='ghiChuNho'>" + cauTrong + "</p>"; return; }
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
  veTheDanhSach(thongBao, "danhSachThongBao", "Hiện chưa có thông báo mới. Bến hoạt động bình thường theo lịch.");
  veTheDanhSach(thongBaoLeTet, "danhSachLeTet", "Hiện chưa có thông báo lịch Lễ – Tết mới. Bến chạy theo lịch thường ngày.");
  veTheDanhSach(tinThatLac, "danhSachThatLac", "Hiện chưa có tin thất lạc nào.");
  veGiaVe();
  veNhomFB();
}

window.onload = function () {
  veTatCa();
  khoiDongThoiTiet();
  taiTiGiaVang();
  taiGiaXangDau();
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

function taiThoiTiet(lat, lon, tenNoi) {
  var el = document.getElementById("thoiTietMini");
  if (!el) return;
  el.innerHTML = "<p class='ghiChuNho'>Đang tải…</p>";
  var url = "https://api.open-meteo.com/v1/forecast?latitude=" + lat + "&longitude=" + lon
    + "&current=temperature_2m,weather_code,wind_speed_10m,wind_gusts_10m&timezone=auto";
  fetch(url).then(function (r) { return r.json(); }).then(function (d) {
    var c = d.current;
    var tt = maThoiTiet(c.weather_code);
    el.innerHTML = "<div class='ttDong1'><span class='ttIconM'>" + tt.icon + "</span>"
      + "<span class='ttNhietM'>" + Math.round(c.temperature_2m) + "°</span></div>"
      + "<div class='ttMoTaM'>" + tt.txt + " · 💨 " + Math.round(c.wind_speed_10m) + " km/h (giật " + Math.round(c.wind_gusts_10m) + ")</div>"
      + "<div class='ttNoiM'>📍 " + tenNoi + "</div>";
  }).catch(function () {
    el.innerHTML = "<p class='ghiChuNho'>Không tải được. Kiểm tra mạng rồi mở lại trang.</p>";
  });
}

function khoiDongThoiTiet() {
  taiThoiTiet(VI_TRI_BEN.lat, VI_TRI_BEN.lon, VI_TRI_BEN.ten);
  var nut = document.getElementById("nutViTri");
  if (nut) nut.addEventListener("click", function () {
    if (!navigator.geolocation) { alert("Thiết bị không hỗ trợ định vị."); return; }
    navigator.geolocation.getCurrentPosition(function (pos) {
      taiThoiTiet(pos.coords.latitude.toFixed(3), pos.coords.longitude.toFixed(3), "Vị trí hiện tại của bạn");
    }, function () {
      alert("Chưa lấy được vị trí. Bạn kiểm tra đã bật Định vị và cho phép trình duyệt dùng vị trí chưa.");
    }, { timeout: 10000 });
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

// ===== LUOT XEM TRANG (bo dem mien phi Abacus - dem moi lan mo trang) =====
function demLuotXem() {
  var NS = "pha-dong-bai-bayview";
  var d = new Date();
  function haiSo(n) { return (n < 10 ? "0" : "") + n; }
  var ngay = d.getFullYear() + "-" + haiSo(d.getMonth() + 1) + "-" + haiSo(d.getDate());
  function gan(id, key) {
    fetch("https://abacus.jasoncameron.dev/hit/" + NS + "/" + key)
      .then(function (r) { return r.json(); })
      .then(function (j) {
        var el = document.getElementById(id);
        if (el && typeof j.value === "number") el.textContent = j.value.toLocaleString("vi-VN");
      })
      .catch(function () { /* khong tai duoc thi giu nguyen dau — */ });
  }
  gan("tongXem", "tong-luot-xem");
  gan("xemHomNay", "ngay-" + ngay);
}
