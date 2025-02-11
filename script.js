// Poem text
const kiplingPoem = `<p>Jika kau dapat <span>menghargai</span> setiap momen bersama,    
Dan <span>menyimpan</span> cinta kita yang selalu baru;  
Jika kau dapat <span>percaya</span> pada hatiku selamanya,    
Dan tahu bahwa <span>kesetiaanku</span> selalu untukmu;  
Jika kau dapat <span>menunggu</span> impian yang layak dikejar,    
Dan <span>tersenyum</span> di tengah tantangan hidup;  
Jika kau dapat <span>memaafkan</span> dengan kelembutan,    
Dan <span>mencerahkan</span> hariku dengan senyum manismu;  
Jika kau dapat <span>bermimpi</span> tentang masa depan yang indah,  
Di mana cinta <span>mekar</span> dalam musim semi tanpa akhir;  
Jika kita dapat <span>berdiri</span> kuat melewati semua musim,    
Dan <span>menemukan kebahagiaan</span> dalam segalanya;  
Maka cinta kita adalah <span>abadi</span>, yang tak mengenal akhir,  
Sebuah ikatan yang waktu tak <span>dapat patahkan</span>;  
Karena kau adalah hatiku, sahabat terindahku,    
Cintaku, <span>pegangan abadi</span> jiwaku.  
Selamat Hari Valentine, sayangku—selamanya! </p>`;

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
