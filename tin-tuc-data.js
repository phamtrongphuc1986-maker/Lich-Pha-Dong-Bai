// ============================================================
// DỮ LIỆU TIN TỨC — trang tin-tuc.html (benphadongbai.io.vn)
// Các lần cập nhật sau (cron 06h00 + 17h00 hằng ngày) CHỈ cần
// viết lại file này: giữ nguyên cấu trúc window.TIN_TUC bên dưới.
// Mỗi tin: tieuDe + tomTat (tự viết lại 1-2 câu) + nguon + link
// bài gốc + gio (giờ/ngày đăng). KHÔNG chép nguyên văn bài báo.
// ============================================================
window.TIN_TUC = {
  capNhat: "11:30 · Thứ Hai, ngày 09/11/2026",
  nhom: [
    {
      id: "quoc-te",
      ten: "🌍 Tin quốc tế nổi bật",
      tin: [
        {
          tieuDe: "COP31 khai mạc tại Antalya: gần 190 nước bàn về khí hậu, Mỹ tiếp tục vắng mặt",
          tomTat: "Hội nghị khí hậu Liên Hợp Quốc lần thứ 31 khai mạc ngày 9/11 tại Antalya (Thổ Nhĩ Kỳ) với gần 190 quốc gia tham dự, tập trung vào thực hiện cam kết giảm phát thải và tài chính khí hậu cho các nước đang phát triển. Mỹ không cử đoàn tham dự năm thứ hai liên tiếp; phần đàm phán do Úc chủ trì.",
          nguon: "Vietnam.vn (theo AP)",
          link: "https://www.vietnam.vn/hoi-nghi-khi-hau-lien-hop-quoc-sap-dien-ra-giua-nhung-thach-thuc-ve-thien-tai-va-an-ninh-nang-luong",
          gio: "09/11/2026"
        },
        {
          tieuDe: "Thượng viện Mỹ đạt bước tiến lớn, tiến tới chấm dứt đợt đóng cửa chính phủ dài kỷ lục",
          tomTat: "Thượng viện Mỹ đã bỏ phiếu thủ tục 60–40 để thúc đẩy gói ngân sách lưỡng đảng, mở đường chấm dứt đợt đóng cửa chính phủ kéo dài hơn 40 ngày — dài nhất trong lịch sử nước này. Gói ngân sách còn phải được Hạ viện thông qua và Tổng thống ký ban hành mới chính thức có hiệu lực.",
          nguon: "Báo Công an Đà Nẵng",
          link: "https://cadn.com.vn/thuong-vien-my-dat-buoc-tien-lon-de-co-the-mo-cua-lai-chinh-phu-post322227.html",
          gio: "09/11/2026"
        },
        {
          tieuDe: "Giá dầu thế giới giảm mạnh trong tuần, Brent còn 63,63 USD/thùng",
          tomTat: "Giá dầu Brent chốt phiên cuối tuần ở mức 63,63 USD/thùng, dầu WTI xuống dưới 60 USD/thùng do lo ngại dư cung, trong lúc thị trường chờ lệnh trừng phạt của Mỹ đối với hai tập đoàn dầu mỏ Nga Rosneft và Lukoil có hiệu lực từ ngày 21/11.",
          nguon: "Bản tin Kinh tế thế giới 09/11",
          link: "https://kimkj.com/vi/economy-board-vi/?mod=document&uid=21163",
          gio: "09/11/2026"
        },
        {
          tieuDe: "Mỹ và Trung Quốc nối lại điện đàm kinh tế cấp cao",
          tomTat: "Bộ trưởng Tài chính Mỹ Scott Bessent, Đại diện Thương mại Jamieson Greer và Phó Thủ tướng Trung Quốc Hà Lập Phong đã điện đàm trực tuyến hôm 6/11 về việc thực thi các cam kết thương mại, trong đó có nông sản và đất hiếm. Cuộc trao đổi diễn ra trước thềm tuần lễ cấp cao APEC tại Thâm Quyến vào giữa tháng 11.",
          nguon: "MoneyDJ",
          link: "https://www.moneydj.com/kmdj/news/newsviewer.aspx?a=bbe3610c-0870-4f08-bf77-4e942e7484c3",
          gio: "07:25 · 09/11/2026"
        }
      ]
    },
    {
      id: "g7",
      ten: "🏛️ Tin G7",
      tin: [
        {
          tieuDe: "Ngoại trưởng G7 bắt đầu họp tại Paris, tập trung vào Ukraine và Iran",
          tomTat: "Ngoại trưởng 7 nước công nghiệp phát triển (Anh, Canada, Pháp, Đức, Italy, Nhật Bản và Mỹ) họp hai ngày 9–10/11 tại Paris. Các nước châu Âu dự kiến thúc giục Mỹ tìm giải pháp công bằng cho Ukraine và kiềm chế khả năng tiến hành thêm các cuộc tấn công nhằm vào Iran; Ngoại trưởng Mỹ Marco Rubio tham dự cả hai ngày họp.",
          nguon: "Báo Lao Động (theo AFP)",
          link: "https://laodong.vn/the-gioi/lanh-dao-g7-hop-mat-tai-phap-1797128.ldo",
          gio: "10:00 · 09/11/2026"
        },
        {
          tieuDe: "G7 tại Paris: châu Âu gây sức ép lên Mỹ về vấn đề Ukraine và Iran",
          tomTat: "Tại hội nghị, các cường quốc châu Âu nhấn mạnh Ukraine không nên bị ép chấp nhận những điều khoản bất lợi trong bất kỳ thỏa thuận hòa bình nào. Ngoại trưởng Pháp Jean-Noël Barrot xác nhận châu Âu sẽ có đại diện và Pháp sẽ tham gia trực tiếp vòng đàm phán Mỹ – Nga – Ukraine tại Abu Dhabi trong hai ngày 10–11/11.",
          nguon: "Báo Nghệ An",
          link: "https://baonghean.vn/hoi-nghi-g7-tai-phap-chau-au-gay-suc-ep-len-my-ve-van-de-ukraine-va-iran-10355465.html",
          gio: "10:33 · 09/11/2026"
        },
        {
          tieuDe: "Pháp chủ trì hội nghị gây quỹ sửa mái vòm bảo vệ nhà máy điện hạt nhân Chernobyl",
          tomTat: "Bên lề hội nghị G7, Bộ Tài chính Pháp tổ chức hội nghị các nhà tài trợ trong ngày 9/11 nhằm gây quỹ sửa chữa mái vòm bảo vệ lò phản ứng Chernobyl — công trình bị hư hại trong một cuộc tấn công của Nga vào năm ngoái.",
          nguon: "The Hindu (theo AFP)",
          link: "https://www.thehindu.com/news/international/g7-ministers-meeting-in-paris-russia-ukraine-conflict-us-israel-strikes-on-iran/article71681281.ece",
          gio: "09/11/2026"
        }
      ]
    },
    {
      id: "g20",
      ten: "🌐 Tin G20",
      tin: [
        {
          tieuDe: "Xuất khẩu Trung Quốc tháng 10 bất ngờ giảm 1,1%, kém nhất kể từ tháng 2",
          tomTat: "Số liệu hải quan công bố ngày 7/11 cho thấy xuất khẩu tháng 10 của Trung Quốc giảm 1,1% so với cùng kỳ năm trước, đảo chiều sau mức tăng 8,3% của tháng 9. Hàng xuất khẩu sang Mỹ giảm hơn 25% dưới sức ép thuế quan; thặng dư thương mại đạt 90,07 tỷ USD, thấp hơn dự báo.",
          nguon: "Reuters (qua Asahi Shimbun)",
          link: "https://ajw-origin.potaufeu.asahi.com/ajw/articles/16143510",
          gio: "09/11/2026"
        },
        {
          tieuDe: "Hàn Quốc hướng tới kim ngạch xuất khẩu 1.000 tỷ USD lần đầu tiên nhờ cơn sốt chip AI",
          tomTat: "Xuất khẩu tháng 10 của Hàn Quốc đạt 115,3 tỷ USD, tăng 93,7% so với cùng kỳ năm trước, trong đó riêng chip bán dẫn đạt 56,4 tỷ USD — chiếm gần một nửa tổng kim ngạch. Nếu giữ được đà này, Hàn Quốc sẽ trở thành nền kinh tế thứ tư trên thế giới cán mốc xuất khẩu 1.000 tỷ USD trong một năm.",
          nguon: "VnEconomy (theo Reuters)",
          link: "http://vneconomy.vn/han-quoc-co-the-dat-kim-ngach-xuat-khau-1-nghin-ty-usd-lan-dau-tien-trong-nam-nay.htm",
          gio: "02/11/2026"
        },
        {
          tieuDe: "Ấn Độ và Trung Quốc cắt giảm mua dầu Nga trước ngày trừng phạt có hiệu lực",
          tomTat: "Trước thời điểm lệnh trừng phạt của Mỹ đối với Rosneft và Lukoil có hiệu lực ngày 21/11, các khách hàng lớn tại Ấn Độ và Trung Quốc đã cắt giảm hoặc ngừng nhập các lô dầu Nga bốc dỡ trong tháng 12. Giá dầu Urals của Nga giảm về quanh 45 USD/thùng, mức thấp nhất kể từ tháng 3/2023.",
          nguon: "Bản tin Kinh tế thế giới 09/11",
          link: "https://kimkj.com/vi/economy-board-vi/?mod=document&uid=21163",
          gio: "09/11/2026"
        }
      ]
    }
  ]
};
