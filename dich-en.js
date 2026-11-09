// Ban dich tieng Anh co dinh cho trang chu Ben pha Dong Bai.
// Dich san boi AI (khong dung dich may tu do cua Google) — chi ap dung khi khach chon English o muc Ngon ngu.
(function () {
  if (localStorage.getItem("pha_dich") !== "en") return;
  if (location.hostname.indexOf("translate.goog") > -1) return;

  var MAP = {
    "🌐 Ngôn ngữ (Select Language):": "🌐 Language:",
    "🌙 Bến phà Đồng Bài về đêm": "🌙 Dong Bai Ferry Terminal at night",
    "⛴️ Phà Bayview Cát Bà cập bến Đồng Bài": "⛴️ Bayview Cat Ba ferry docking at Dong Bai Terminal",
    "⚓ Mặt bến Đồng Bài — lối xuống phà": "⚓ Dong Bai Terminal — the way down to the ferry",
    "🚠 Tháp cáp treo Cát Bà nhìn từ bến Đồng Bài": "🚠 Cat Ba cable car towers seen from Dong Bai Terminal",
    "LỊCH PHÀ ĐỒNG BÀI – CÁI VIỀNG": "DONG BAI – CAI VIENG FERRY SCHEDULE",
    "ĐI CÁT BÀ – NHỚ PHÀ ĐỒNG BÀI!": "GOING TO CAT BA – REMEMBER DONG BAI FERRY!",
    "Phà Bayview 01–05 • Mở bến 05h00 • 24 cặp chuyến mỗi ngày": "Bayview Ferries 01–05 • Opens 05:00 • 24 round trips daily",
    "Lịch chạy • Giá vé • Thủy triều • Thời tiết": "Schedule • Fares • Tides • Weather",
    "🌦️ Thời tiết": "🌦️ Weather",
    "🌦️ Thời tiết ở bến": "🌦️ Weather at the Terminal",
    "👁️ Lượt xem": "👁️ Views",
    "Tổng số": "Total",
    "Hôm nay": "Today",
    "📍 Xem theo vị trí của tôi": "📍 Use my location",
    "📍 Đang lấy vị trí…": "📍 Locating…",
    "Thiết bị không hỗ trợ định vị.": "Geolocation is not supported by this device.",
    "Vị trí hiện tại của bạn": "Your current location",
    "Khu vực Bến Đồng Bài — Cát Hải": "Dong Bai Ferry Terminal area — Cat Hai",
    "Chỉ đường đến Bến Đồng Bài": "Directions to Dong Bai Ferry Terminal",
    "Chỉ đường đến Bến Cái Viềng": "Directions to Cai Vieng Ferry Terminal",
    "Cáp treo Cát Bà": "Cat Ba Cable Car",
    "Khách sạn Cát Bà": "Cat Ba Hotels",
    "Ăn hải sản Cát Bà": "Cat Ba Seafood",
    "Tin tức Cát Bà": "Cat Ba News",
    "Du lịch Cát Bà": "Cat Ba Travel Guide",
    "Bãi tắm Lan Hạ": "Lan Ha Bay Beaches",
    "Vườn quốc gia Cát Bà": "Cat Ba National Park",
    "Hải sản & ẩm thực": "Seafood & Cuisine",
    "Việt Hải": "Viet Hai Village",
    "Vịnh Lan Hạ – Vịnh Hạ Long": "Lan Ha Bay – Ha Long Bay",
    "Chạm vào ô để mở tiện ích — các thẻ bên dưới chạm vào tiêu đề để thu gọn/mở ra.": "Tap a tile to open a utility — tap a card title below to collapse or expand it.",
    "⛴️ Chuyến tiếp theo": "⛴️ Next Ferry",
    "Chuyến đầu tiên ngày mai": "First ferry tomorrow",
    "Chuyến đầu ngày": "First departure of the day",
    "Đồng Bài → Cái Viềng": "Dong Bai → Cai Vieng",
    "Cái Viềng → Đồng Bài": "Cai Vieng → Dong Bai",
    "Bến Đồng Bài": "Dong Bai Ferry Terminal",
    "Bến Cái Viềng": "Cai Vieng Ferry Terminal",
    "Giờ mở bến: 05h00 hằng ngày. Giờ chạy có thể điều chỉnh theo thời tiết và lượng hành khách.": "The terminal opens at 05:00 daily. Departure times may change depending on weather and passenger volume.",
    "⚠️ Thông báo": "⚠️ Notice",
    "⚠️ Thông báo của bến": "⚠️ Terminal Notice",
    "Hiện chưa có thông báo mới. Bến hoạt động bình thường theo lịch.": "No new notices. The terminal is operating normally on schedule.",
    "🌬️ Gió Đông Bắc mạnh lên tại Cát Hải": "🌬️ Northeast monsoon strengthening over Cat Hai",
    "Theo bản tin của Đài Khí tượng thủy văn Hải Phòng và Trung tâm Dự báo Khí tượng Thủy văn Quốc gia, ngày 09/11/2026 khu vực Cát Hải chịu ảnh hưởng của đợt không khí lạnh, gió chuyển hướng Đông Bắc và mạnh lên.": "According to the Hai Phong Hydro-Meteorological Station and the National Centre for Hydro-Meteorological Forecasting, on 9 November 2026 the Cat Hai area is affected by a cold air surge, with winds shifting to the northeast and strengthening.",
    "Bến Đồng Bài – Cái Viềng:": "Dong Bai – Cai Vieng terminals:",
    "gió Đông Bắc cấp 4–5, có lúc cấp 6, gió giật có thể đạt cấp 7; sóng biển ven bờ khoảng 1–2 m.": "northeast winds at Beaufort force 4–5, at times force 6, with gusts possibly reaching force 7; coastal waves around 1–2 m.",
    "Vùng biển Cát Hải – Vịnh Lan Hạ:": "Cat Hai – Lan Ha Bay waters:",
    "gió Đông Bắc cấp 4–5, có lúc cấp 6.": "northeast winds at Beaufort force 4–5, at times force 6.",
    "Vịnh Bắc Bộ:": "Gulf of Tonkin:",
    "gió Đông Bắc cấp 7, có lúc cấp 8, biển động mạnh.": "northeast winds at force 7, at times force 8, with rough seas.",
    "Quy đổi cấp gió sang tốc độ:": "Wind force converted to speed:",
    "Cấp 4": "Force 4",
    "Cấp 5": "Force 5",
    "Cấp 6": "Force 6",
    "Cấp 7": "Force 7",
    "Cấp 8": "Force 8",
    "5,5–7,9 m/s": "5.5–7.9 m/s",
    "8,0–10,7 m/s": "8.0–10.7 m/s",
    "10,8–13,8 m/s": "10.8–13.8 m/s",
    "13,9–17,1 m/s": "13.9–17.1 m/s",
    "17,2–20,7 m/s": "17.2–20.7 m/s",
    "Lưu ý hành khách:": "Note for passengers:",
    "gió cấp 4–5 cần chú ý sóng và điều kiện thời tiết; gió cấp 6 trở lên cần đặc biệt theo dõi thông báo điều hành của bến. Tuyến phà có thể chịu ảnh hưởng của gió ngang và sóng khi di chuyển qua luồng biển.": "at force 4–5, please mind the waves and weather conditions; at force 6 and above, closely follow the terminal's operational notices. The ferry route may be affected by crosswinds and waves while crossing the channel.",
    "Đây là cấp gió dự báo cho khu vực, không phải số đo trực tiếp tại bến. Việc phà chạy hay tạm dừng do ảnh hưởng thời tiết sẽ theo thông báo điều hành chính thức của bến — hành khách vui lòng theo dõi mục thông báo này để cập nhật.": "These are forecast wind levels for the area, not measurements taken at the terminal. Whether ferries run or are suspended due to weather follows the terminal's official operational notices — please keep checking this notice section for updates.",
    "Nguồn:": "Sources:",
    "Khí tượng thủy văn Hải Phòng": "Hai Phong Hydro-Meteorological Station",
    "Dự báo thời tiết biển — NCHMF": "Marine weather forecast — NCHMF",
    "🕐 Lịch chạy trong ngày": "🕐 Today's Schedule",
    "Lịch áp dụng từ 01/9/2026 đến 31/12/2026. Dòng được tô màu là chuyến sắp chạy gần nhất. Lịch mùa hè (25/03–25/09) và mùa đông chi tiết sẽ cập nhật sau.": "This schedule applies from 1 September 2026 to 31 December 2026. The highlighted row is the next departure. Detailed summer (25 March–25 September) and winter schedules will be updated later.",
    "Giờ khởi hành": "Departure time",
    "Loại phà": "Ferry type",
    "≥180 tấn": "≥180 tons",
    "★ >180 tấn — chở xe cháy nổ, hôi tanh": "★ >180 tons — carries fuel and gas vehicles, flammable and odorous cargo",
    "★ <100 tấn — hàng cháy nổ, hôi tanh": "★ <100 tons — flammable and odorous cargo",
    "Phà tự hành ≥180 tấn chạy các chuyến trong ngày. Riêng chuyến 14h00 từ Bến Đồng Bài (đánh dấu ★) là chuyến tăng cường chở xe xăng dầu, xe gas, hàng cháy nổ, hôi tanh. Phà tự hành 20 tấn bảo đảm an toàn giao thông khẩn cấp: 04 chuyến/ngày.": "Self-propelled ferries of 180 tons and over run the day's departures. The 14:00 sailing from Dong Bai (marked ★) is an extra departure for fuel and gas vehicles and flammable or odorous cargo. A 20-ton ferry ensures emergency transport safety: 4 sailings per day.",
    "🎫 Giá vé": "🎫 Ticket Prices",
    "🎫 Giá vé phà": "🎫 Ferry Ticket Prices",
    "I. Giá dịch vụ chung": "I. Standard Prices",
    "II. Áp dụng đối với người dân Đặc Khu Cát Hải": "II. Prices for Residents of the Cat Hai Special Zone",
    "Mức giá đã bao gồm thuế VAT 8%. Căn cứ: Thông tư số 45/2024/TT-BTC ngày 01/7/2024 của Bộ Tài chính và Quyết định số 3701/QĐ-UBND ngày 12/9/2025 của Ủy ban nhân dân thành phố Hải Phòng về việc ban hành khung giá dịch vụ xe chở phà tại bến phà Đồng Bài – Cái Viềng.": "Prices include 8% VAT. Basis: Circular No. 45/2024/TT-BTC dated 1 July 2024 of the Ministry of Finance and Decision No. 3701/QD-UBND dated 12 September 2025 of the Hai Phong People's Committee issuing the vehicle ferry service price framework at the Dong Bai – Cai Vieng ferry terminal.",
    "Áp dụng cho mọi hành khách, gồm khách du lịch và người ngoài Đặc Khu Cát Hải. Giá xe tính theo xe, không kể khách ngồi trên xe.": "Applies to all passengers, including tourists and people from outside the Cat Hai Special Zone. Vehicle prices are per vehicle, regardless of the passengers on board.",
    "Nhóm người dân Đặc Khu Cát Hải, TP. Hải Phòng được giảm giá (còn một nửa giá chung). Đơn vị tính theo bảng giá niêm yết tại bến.": "Residents of the Cat Hai Special Zone, Hai Phong City receive a discount (half the standard price). Units follow the price list posted at the terminal.",
    "Hành khách đi bộ": "Passenger on foot",
    "Hành khách đi xe đạp": "Passenger with a bicycle",
    "Hành khách đi xe máy": "Passenger with a motorbike",
    "Xe đạp thồ các loại": "Cargo bicycle (all types)",
    "Xe ô tô dưới 9 chỗ ngồi (không kể người ngồi trên xe)": "Car with under 9 seats (passengers excluded)",
    "Xe ô tô khách từ 9 đến dưới 24 chỗ (không kể khách)": "Passenger vehicle, 9 to under 24 seats (passengers excluded)",
    "Xe ô tô khách từ 24 đến dưới 32 chỗ (không kể khách)": "Passenger vehicle, 24 to under 32 seats (passengers excluded)",
    "Xe ô tô khách từ 32 chỗ ngồi trở lên (không kể khách)": "Passenger vehicle, 32 seats and over (passengers excluded)",
    "Xe ô tô tải dưới 1 tấn không hàng": "Truck under 1 ton, empty",
    "Xe ô tô tải dưới 1 tấn có hàng": "Truck under 1 ton, loaded",
    "Xe ô tô tải từ 1 tấn đến dưới 3 tấn không hàng": "Truck from 1 to under 3 tons, empty",
    "Xe ô tô tải từ 1 tấn đến dưới 3 tấn có hàng": "Truck from 1 to under 3 tons, loaded",
    "Xe ô tô tải từ 03 tấn đến dưới 05 tấn không hàng": "Truck from 3 to under 5 tons, empty",
    "Xe ô tô tải từ 03 tấn đến dưới 05 tấn có hàng": "Truck from 3 to under 5 tons, loaded",
    "Xe ô tô tải từ 05 tấn đến dưới 10 tấn không hàng": "Truck from 5 to under 10 tons, empty",
    "Xe ô tô tải từ 05 tấn đến dưới 10 tấn có hàng": "Truck from 5 to under 10 tons, loaded",
    "Xe ô tô tải từ 10 tấn đến dưới 13 tấn không hàng": "Truck from 10 to under 13 tons, empty",
    "Xe ô tô tải từ 10 tấn đến dưới 13 tấn có hàng": "Truck from 10 to under 13 tons, loaded",
    "Xe ô tô tải từ 13 tấn đến dưới 16 tấn không hàng": "Truck from 13 to under 16 tons, empty",
    "Xe ô tô tải từ 13 tấn đến dưới 16 tấn có hàng": "Truck from 13 to under 16 tons, loaded",
    "Xe ô tô tải từ 16 tấn đến dưới 30 tấn không hàng": "Truck from 16 to under 30 tons, empty",
    "Xe ô tô tải từ 16 tấn đến dưới 30 tấn có hàng": "Truck from 16 to under 30 tons, loaded",
    "Xe ô tô tải từ 30 tấn đến dưới 40 tấn không hàng": "Truck from 30 to under 40 tons, empty",
    "Xe ô tô tải từ 30 tấn đến dưới 40 tấn có hàng": "Truck from 30 to under 40 tons, loaded",
    "Xe ô tô tải từ 40 tấn đến dưới 47 tấn không hàng": "Truck from 40 to under 47 tons, empty",
    "Xe trộn bê tông (khối lượng toàn bộ đến 25 tấn) không có bê tông": "Concrete mixer truck (gross weight up to 25 tons), empty",
    "Xe trộn bê tông (khối lượng toàn bộ đến 25 tấn) có bê tông": "Concrete mixer truck (gross weight up to 25 tons), loaded",
    "Xe đầu kéo sơmi rơ mooc chở Container đến 20Feet không hàng": "Tractor-trailer carrying a container up to 20 ft, empty",
    "Xe đầu kéo sơmi rơ mooc chở Container đến 20Feet có hàng": "Tractor-trailer carrying a container up to 20 ft, loaded",
    "Xe đầu kéo sơmi rơ mooc chở Container trên 20Feet (khối lượng toàn bộ của tổ hợp xe đến 47 tấn) không hàng": "Tractor-trailer carrying a container over 20 ft (combination gross weight up to 47 tons), empty",
    "Xe đầu kéo sơmi rơ mooc chở Container trên 20Feet (khối lượng toàn bộ của tổ hợp xe đến 47 tấn) có hàng": "Tractor-trailer carrying a container over 20 ft (combination gross weight up to 47 tons), loaded",
    "Hàng hoá qua phà từ 61kg trở lên": "Ferry cargo from 61 kg upwards",
    "💰 Tỉ giá — Giá vàng": "💰 Exchange Rates — Gold Prices",
    "Đang tải tỉ giá và giá vàng…": "Loading exchange rates and gold prices…",
    "Không tải được tỉ giá — giá vàng. Kiểm tra kết nối mạng rồi mở lại trang.": "Could not load exchange rates and gold prices. Check your connection and reopen the page.",
    "🇺🇸 Đô la Mỹ (USD)": "🇺🇸 US Dollar (USD)",
    "🇬🇧 Bảng Anh (GBP)": "🇬🇧 British Pound (GBP)",
    "🇨🇳 Nhân dân tệ (CNY)": "🇨🇳 Chinese Yuan (CNY)",
    "🥇 Vàng thế giới": "🥇 World gold",
    "🥇 Vàng quy đổi": "🥇 Gold (converted)",
    ". Giá vàng là vàng thế giới quy đổi — không phải giá mua bán SJC tại quầy.": ". Prices shown are world gold prices converted to VND — not SJC counter buy/sell prices.",
    "⛽ Giá xăng – dầu & giá gạo": "⛽ Fuel & Rice Prices",
    "Đang tải giá xăng dầu…": "Loading fuel prices…",
    "Không tải được giá xăng dầu. Kiểm tra kết nối mạng rồi mở lại trang.": "Could not load fuel prices. Check your connection and reopen the page.",
    "⛽ Xăng E5 RON 92": "⛽ E5 RON 92 petrol",
    "⛽ Xăng RON 95-III (E10)": "⛽ RON 95-III petrol (E10)",
    "⛽ Xăng RON 95-V (E10)": "⛽ RON 95-V petrol (E10)",
    "🛢️ Dầu diesel 0,05S": "🛢️ Diesel oil 0.05S",
    "🛢️ Dầu diesel 0,001S": "🛢️ Diesel oil 0.001S",
    "🛢️ Dầu hỏa": "🛢️ Kerosene",
    "Xăng E5 RON 92 Mức 2": "E5 RON 92 petrol, grade 2",
    "Xăng E10 RON 95 Mức 3": "E10 RON 95 petrol, grade 3",
    "Xăng E10 RON 95 Mức 5": "E10 RON 95 petrol, grade 5",
    "RON 95 Mức 3": "RON 95 petrol, grade 3",
    "RON 95 Mức 5": "RON 95 petrol, grade 5",
    "Điêzen 0,05S Mức 2": "Diesel 0.05S, grade 2",
    "Điêzen 0,001S Mức 5": "Diesel 0.001S, grade 5",
    "Dầu hỏa": "Kerosene",
    " (Petrolimex, vùng 1). Giá vùng 2 (vùng xa) cao hơn khoảng 500–600 đ/lít.": " (Petrolimex, Zone 1). Zone 2 (remote areas) prices are about 500–600 VND/litre higher.",
    ". Nguồn: VTC News. Giá vùng 2 (vùng xa) cao hơn khoảng 500–600 đ/lít.": ". Source: VTC News. Zone 2 (remote areas) prices are about 500–600 VND/litre higher.",
    "🌾 Giá gạo bán lẻ tham khảo": "🌾 Reference Retail Rice Prices",
    "Gạo thường": "Regular rice",
    "Gạo trắng thông dụng": "Common white rice",
    "Gạo Đài Thơm 8": "Dai Thom 8 fragrant rice",
    "Gạo thơm Jasmine": "Jasmine fragrant rice",
    "Giá gạo ghi nhận tại các chợ lẻ ngày 30/10/2026 — mỗi chợ, mỗi vùng có thể chênh lệch ít nhiều.": "Rice prices recorded at retail markets on 30 October 2026 — prices may vary slightly between markets and regions.",
    "🌊 Thủy triều": "🌊 Tide",
    "Chọn trạm:": "Choose station:",
    "Hòn Dấu": "Hon Dau",
    "Hồng Gai": "Hong Gai",
    "Cửa Ông": "Cua Ong",
    "Cửa Việt": "Cua Viet",
    "Cửa Hội": "Cua Hoi",
    "Cửa Gianh": "Cua Gianh",
    "Đà Nẵng": "Da Nang",
    "Quy Nhơn": "Quy Nhon",
    "Nha Trang": "Nha Trang",
    "Vũng Tàu": "Vung Tau",
    "Cần Giờ": "Can Gio",
    "Sài Gòn": "Sai Gon",
    "Định An": "Dinh An",
    "Hà Tiên": "Ha Tien",
    "Trường Sa": "Truong Sa",
    "Hòn Dấu (Hải Phòng)": "Hon Dau (Hai Phong)",
    "Hồng Gai (Quảng Ninh)": "Hong Gai (Quang Ninh)",
    "Cửa Ông (Quảng Ninh)": "Cua Ong (Quang Ninh)",
    "Cửa Việt (Quảng Trị)": "Cua Viet (Quang Tri)",
    "Cửa Hội (Nghệ An)": "Cua Hoi (Nghe An)",
    "Cửa Gianh (Quảng Bình)": "Cua Gianh (Quang Binh)",
    "Quy Nhơn (Bình Định)": "Quy Nhon (Binh Dinh)",
    "Nha Trang (Khánh Hòa)": "Nha Trang (Khanh Hoa)",
    "Cần Giờ (TP.HCM)": "Can Gio (Ho Chi Minh City)",
    "Sài Gòn (TP.HCM)": "Sai Gon (Ho Chi Minh City)",
    "Định An (Trà Vinh)": "Dinh An (Tra Vinh)",
    "Hà Tiên (Kiên Giang)": "Ha Tien (Kien Giang)",
    "Đang tải lịch thủy triều…": "Loading tide schedule…",
    "Không tải được lịch thủy triều. Kiểm tra kết nối mạng rồi mở lại trang.": "Could not load the tide schedule. Check your connection and reopen the page.",
    "Đỉnh triều": "High tide",
    "Chân triều": "Low tide",
    "lúc": "at",
    "🧧 Thông báo Lễ – Tết": "🧧 Public Holiday – Tet Notices",
    "Hiện chưa có thông báo lịch Lễ – Tết mới. Bến chạy theo lịch thường ngày.": "No new holiday schedule notices. Ferries are running on the regular schedule.",
    "🧳 Tìm đồ thất lạc": "🧳 Lost & Found",
    "Đồ để quên trên phà Bayview 01 – 05": "Items left on ferries Bayview 01 – 05",
    "Đồ rơi ở làn xe chờ": "Items dropped in the vehicle waiting lanes",
    "Giấy tờ rơi tại Đặc Khu Cát Hải": "Documents lost in the Cat Hai Special Zone",
    "Hành khách để quên đồ trên phà liên hệ Ban chỉ huy Bến tại đầu bến Đồng Bài hoặc Cái Viềng để được hỗ trợ nhận lại.": "If you left an item on a ferry, please contact the Terminal Management Board at either the Dong Bai or Cai Vieng terminal for assistance in recovering it.",
    "Khu vực làn xe chờ hai đầu bến được kiểm tra thường xuyên. Hành khách mất đồ tại đây liên hệ Ban chỉ huy Bến.": "The vehicle waiting lanes at both terminals are checked regularly. If you lost an item there, please contact the Terminal Management Board.",
    "Hiện chưa có tin thất lạc nào.": "No lost items have been reported yet.",
    "Hội nhóm Facebook tìm đồ tại Cát Hải": "Facebook groups for lost & found in Cat Hai",
    "Ngoài liên hệ bến phà, hành khách có thể đăng tìm trong các hội nhóm Facebook của khu vực Cát Hải ở mục dưới đây.": "In addition to contacting the ferry terminal, you can post a search in the Cat Hai area Facebook groups listed below.",
    "Danh sách hội nhóm đang được bổ sung.": "The group list is being updated.",
    "📱 Cài đặt ứng dụng": "📱 Install the App",
    "⬇️ Cài đặt ứng dụng": "⬇️ Install the App",
    "Cài": "Install",
    "Lịch Phà Đồng Bài": "the Dong Bai Ferry Schedule",
    "vào màn hình chính để mở nhanh như một ứng dụng — không cần qua cửa hàng ứng dụng.": "on your home screen to open it quickly like an app — no app store needed.",
    "Bến Phà Đồng Bài – Cái Viềng": "Dong Bai – Cai Vieng Ferry Terminal",
    "Công ty TNHH Bayview Cát Bà": "Bayview Cat Ba Co., Ltd",
    "CAT BA BAYVIEW COMPANY LIMITED — Hải Phòng": "CAT BA BAYVIEW COMPANY LIMITED — Hai Phong",
    "Đội phà: Bayview 01 · 02 · 03 · 04 · 05": "Ferry fleet: Bayview 01 · 02 · 03 · 04 · 05",
    "Khi cần hỗ trợ, hành khách liên hệ Ban chỉ huy Bến tại đầu bến Đồng Bài hoặc Cái Viềng. Ban chỉ huy Bến có thể chủ động giãn cách giữa các chuyến phà tối đa 40 phút tùy tình hình giao thông thực tế tại bến.": "For assistance, passengers can contact the Terminal Management Board at either the Dong Bai or Cai Vieng terminal. The Board may space out ferry departures by up to 40 minutes depending on actual traffic conditions at the terminal.",
    "Chính sách bảo mật": "Privacy Policy",
    "Điều khoản sử dụng": "Terms of Use",
    "Về đầu trang": "Back to top",
    "Đang tải…": "Loading…",
    "Không tải được. Kiểm tra mạng rồi mở lại trang.": "Could not load. Check your connection and reopen the page.",
    "Không thấy trong trang — tìm trên Google bên dưới:": "Not found on this page — search with Google below:",
    "📍 HIALO — tìm người quanh đây (web liên kết)": "📍 HIALO — meet people nearby (partner website)",
    "📰 Kinh nghiệm du lịch Cát Bà tự túc": "📰 Cat Ba self-guided travel guide",
    "📰 Du lịch Hải Phòng: đi đâu, ăn gì, chơi gì": "📰 Hai Phong travel: where to go, what to eat, what to do",
    "📰 Bến phà Đồng Bài: giờ chạy & giá vé (bài viết)": "📰 Dong Bai ferry terminal: schedule & fares (article)",
    "📰 Bãi tắm đẹp nhất vịnh Lan Hạ": "📰 The best beaches of Lan Ha Bay",
    "📰 Đảo có bãi tắm đẹp nhất vịnh Hạ Long": "📰 Islands with the best beaches in Ha Long Bay",
    "📰 Vườn quốc gia Cát Bà": "📰 Cat Ba National Park",
    "📰 Pháo đài Thần Công Cát Bà": "📰 Cannon Fort, Cat Ba",
    "📰 Tất cả bài viết cẩm nang du lịch": "📰 All travel guide articles",
    "Có mây": "Cloudy",
    "Trời quang": "Clear sky",
    "Nhiều mây": "Mostly cloudy",
    "Nắng nhẹ": "Light sunshine",
    "Mưa nhỏ": "Light rain",
    "Mưa vừa": "Moderate rain",
    "Mưa to": "Heavy rain",
    "Mưa rào": "Rain showers",
    "Mưa phùn": "Drizzle",
    "Dông": "Thunderstorms",
    "Sương mù": "Fog",
    "Có tuyết": "Snow"
  };

  var NGAY = {
    "Thứ Hai": "Monday", "Thứ Ba": "Tuesday", "Thứ Tư": "Wednesday",
    "Thứ Năm": "Thursday", "Thứ Sáu": "Friday", "Thứ Bảy": "Saturday",
    "Chủ Nhật": "Sunday"
  };

  function dichChuoi(s) {
    var t = s.trim();
    if (!t) return s;
    if (MAP[t]) return s.replace(t, MAP[t]);
    var m;
    if ((m = t.match(/^Còn khoảng (\d+) phút nữa$/))) return s.replace(t, "About " + m[1] + " minutes left");
    if ((m = t.match(/^Bây giờ: (.+?) — (Thứ [^,]+|Chủ Nhật), (.+)$/))) return s.replace(t, "Now: " + m[1] + " — " + (NGAY[m[2]] || m[2]) + ", " + m[3]);
    if ((m = t.match(/^(.+?) · 💨 ([\d.,]+) m\/s — gió cấp (\d+) \(giật ([\d.,]+) m\/s\)$/))) {
      var moTa = MAP[m[1]] || m[1];
      return s.replace(t, moTa + " · 💨 " + m[2].replace(",", ".") + " m/s — Beaufort force " + m[3] + " (gusts " + m[4].replace(",", ".") + " m/s)");
    }
    if ((m = t.match(/^(\d{1,2})h · Chân triều$/))) return s.replace(t, m[1] + "h · Low tide");
    if ((m = t.match(/^Âm lịch (.+)$/))) return s.replace(t, "Lunar " + m[1]);
    if ((m = t.match(/^Hôm nay (.+)$/))) return s.replace(t, "Today " + m[1]);
    if ((m = t.match(/^Ngày mai (.+)$/))) return s.replace(t, "Tomorrow " + m[1]);
    if ((m = t.match(/^Trạm (.+)$/))) return s.replace(t, "Station " + (MAP[m[1]] || m[1]));
    if ((m = t.match(/^Vị trí của bạn — (.+)$/))) return s.replace(t, "Your location — " + m[1]);
    if ((m = t.match(/^Tỉ giá tham khảo thị trường quốc tế, cập nhật (.+)$/))) return s.replace(t, "Reference exchange rates from international markets, updated " + m[1]);
    if ((m = t.match(/^Giá bán lẻ Petrolimex vùng 1 \(áp dụng khu vực Hải Phòng\), kỳ điều hành (.+)$/))) return s.replace(t, "Petrolimex retail prices, Zone 1 (applies to the Hai Phong area), price period " + m[1]);
    if ((m = t.match(/^Đang hiển thị bảng giá dự phòng — kỳ điều hành (.+)$/))) return s.replace(t, "Showing the fallback price table — price period " + m[1]);
    if ((m = t.match(/^🌐 Tìm “(.+)” trên Google$/))) return s.replace(t, "🌐 Search “" + m[1] + "” on Google");
    if ((m = t.match(/^([\d.,]+)đ\/(người|xe|tạ)$/))) return s.replace(t, m[1] + (m[2] === "người" ? " VND/person" : m[2] === "xe" ? " VND/vehicle" : " VND/100 kg"));
    if ((m = t.match(/^([\d.,–-]+) ?đ\/kg$/))) return s.replace(t, m[1] + " VND/kg");
    if ((m = t.match(/^([\d.,]+) ?đ\/lít$/))) return s.replace(t, m[1] + " VND/litre");
    if ((m = t.match(/^(Thứ [^,]+|Chủ Nhật), (.+)$/)) && NGAY[m[1]]) return s.replace(t, NGAY[m[1]] + ", " + m[2]);
    if ((m = t.match(/^Nguồn: (.+)$/))) return s.replace(t, "Source: " + m[1]);
    return s;
  }

  function suaTieuDeLich() {
    var hs = document.querySelectorAll("#mucLich h3");
    for (var i = 0; i < hs.length; i++) {
      var txt = hs[i].textContent.replace(/\s+/g, " ").trim();
      if (txt === "Từ Bến Đồng Bài") hs[i].textContent = "From Dong Bai Ferry Terminal";
      else if (txt === "Từ Bến Cái Viềng") hs[i].textContent = "From Cai Vieng Ferry Terminal";
    }
  }

  var dangDich = false;
  function apDung() {
    if (dangDich) return;
    dangDich = true;
    try {
      document.title = "Dong Bai – Cai Vieng Ferry Schedule | Departure Times & Ticket Prices to Cat Ba";
      var walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
        acceptNode: function (n) {
          if (!n.nodeValue || !n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
          var cha = n.parentElement;
          if (!cha) return NodeFilter.FILTER_REJECT;
          var tag = cha.tagName;
          if (tag === "SCRIPT" || tag === "STYLE" || tag === "OPTION") return NodeFilter.FILTER_REJECT;
          if (cha.closest && cha.closest("#mucLich h3")) return NodeFilter.FILTER_REJECT;
          return NodeFilter.FILTER_ACCEPT;
        }
      });
      var nut;
      while ((nut = walker.nextNode())) {
        var moi = dichChuoi(nut.nodeValue);
        if (moi !== nut.nodeValue) nut.nodeValue = moi;
      }
      var oTim = document.getElementById("oTimKiem");
      if (oTim) oTim.setAttribute("placeholder", "Search this page: fares, tides, departure times…");
      suaTieuDeLich();
    } finally {
      dangDich = false;
    }
  }

  var henGio = null;
  var quan = new MutationObserver(function () {
    if (dangDich) return;
    clearTimeout(henGio);
    henGio = setTimeout(apDung, 200);
  });

  function khoiDong() {
    apDung();
    quan.observe(document.body, { childList: true, subtree: true, characterData: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", khoiDong);
  else khoiDong();
})();
