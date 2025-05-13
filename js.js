const kiplingPoem = `<p>اگر بتوانی <span>خونسردی</span> خود را حفظ کنی وقتی همه در اطرافت    
آن را <span>از دست</span> می‌دهند و تو را <span>سرزنش</span> می‌کنند؛ 
اگر بتوانی به خودت <span>اعتماد</span> کنی وقتی همه مردمان به تو <span>شک</span> دارند،    
ولی برای شک‌کردنشان <span>درک</span> قائل شوی؛ 
اگر بتوانی <span>صبر</span> کنی و از صبر <span>خسته</span> نشوی،    
یا وقتی به تو <span>دروغ</span> می‌گویند، دروغ نگی، 
یا وقتی تو را <span>دشمن</span> می‌دارند، گرفتار <span>دشمنی</span> نشوی،    
و با این حال، نه خیلی خود را نیکو ببینی، نه خیلی دانا بنمایی؛
اگر بتوانی <span>رویا</span> ببینی—و رویاها را <span>ارباب</span> خود نسازی؛ 
اگر بتوانی <span>بیاندیشی</span>—و اندیشه را هدف <span>نهایی</span> خود نسازی؛ 
اگر بتوانی با <span>پیروزی</span> و <span>فاجعه</span> روبه‌رو شوی    
و این دو <span>فریب‌کار</span> را به یک چشم بنگری؛ 
اگر بتوانی <span>حقیقت</span>ی را که گفته‌ای بشنوی    
که توسط خائنان <span>تحریف</span> شده تا برای ساده‌لوحان <span>دام</span> بسازند، 
یا ببینی که چیزهایی را که برایشان زندگی کرده‌ای <span>ویران</span> شده،    
و با ابزارهای فرسوده آن‌ها را از نو <span>بسازی</span>؛
اگر بتوانی تمام <span>دستاوردهایت</span> را در یک <span>کپه</span> جمع کنی    
و آن‌ها را بر سر یک بازی <span>قمار</span> به خطر بیندازی، 
و <span>ببازی</span>، و دوباره از نو آغاز کنی    
و حتی یک کلمه هم درباره‌ی <span>باخت</span> نگویی؛ 
اگر بتوانی قلب، عصب و <span>ماهیچه</span>‌ات را مجبور کنی    
که پس از آنکه تحلیل رفتند، همچنان <span>خدمت</span> کنند، 
و آن‌گاه <span>پایداری</span> کنی وقتی چیزی در تو باقی نمانده    
جز <span>اراده</span>‌ای که به آن‌ها می‌گوید: «پایداری کن»؛
اگر بتوانی با مردم <span>صحبت</span> کنی و <span>پاکدامنی</span> خود را نگه‌داری،    
یا با پادشاهان <span>گام برداری</span>—و ارتباط خود را با مردم <span>حفظ</span> کنی؛ 
اگر نه <span>دشمنان</span> و نه دوستان مهربان تو را <span>آزار</span> ندهند؛    
اگر همه مردم برایت <span>ارزش</span> داشته باشند، ولی نه بیش از حد؛ 
اگر بتوانی دقیقه‌ی <span>بی‌بخشش</span> را پُر کنی    
با شصت ثانیه <span>دوندگی</span> تمام‌عیار—    
زمین و هرچه در آن است از آن تو خواهد بود، 
و—بیش از آن—تو یک <span>مرد</span> خواهی بود، پسرم!     -رودیارد کیپلینگ</p>`;


// Function to insert poem into divs
function insertPoemIntoDivs() {
	// Get all .text divs
	const textDivs = document.querySelectorAll(".text");

	// Insert poem into all .text divs
	textDivs.forEach((div) => {
		div.innerHTML = kiplingPoem;
	});
}

// Call the function when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", insertPoemIntoDivs);

const contentDiv = document.querySelector(".content");
function adjustContentSize() {
	const viewportWidth = window.innerWidth;
	const baseWidth = 1000;
	const scaleFactor =
		viewportWidth < baseWidth ? (viewportWidth / baseWidth) * 0.8 : 1;
	contentDiv.style.transform = `scale(${scaleFactor})`;
}
window.addEventListener("load", adjustContentSize);
window.addEventListener("resize", adjustContentSize);
