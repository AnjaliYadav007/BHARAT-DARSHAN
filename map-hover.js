// Hover functionality with cursor-following name tooltip
document.querySelectorAll(".allpaths").forEach(e => {
    e.addEventListener("mouseover", function () {
        e.style.fill = "#336dff"
        document.getElementById("namep").innerText = e.getAttribute("name") || e.id
        document.getElementById("name").style.opacity = 1
    })
    
    e.addEventListener("mousemove", function(event) {
        // Follow cursor position
        document.getElementById("name").style.top = event.clientY + 15 + "px"
        document.getElementById("name").style.left = event.clientX + 15 + "px"
    })
    
    e.addEventListener("mouseleave", function () {
        e.style.fill = "#ececec"
        document.getElementById("name").style.opacity = 0
    })
    
    // Click functionality - opens detailed culture page
    e.addEventListener("click", function() {
        const stateName = e.getAttribute("name") || e.id
        openCulturePage(stateName)
    })
})

// Make sure the name tooltip has proper CSS with very high z-index
const nameTooltipStyle = document.createElement("style")
nameTooltipStyle.textContent = `
    #name {
        position: fixed !important;
        pointer-events: none !important;
        background: white !important;
        padding: 8px 15px !important;
        border-radius: 8px !important;
        box-shadow: 0 4px 15px rgba(0,0,0,0.3) !important;
        z-index: 999999 !important;
        font-size: 16px !important;
        font-weight: 600 !important;
        color: #333 !important;
        border: 2px solid #336dff !important;
        white-space: nowrap !important;
    }
`
document.head.appendChild(nameTooltipStyle)

// Culture data for states
const cultureData = {
    "Uttar Pradesh": {
        title: "Uttar Pradesh - The Heartland of India",
        sections: [
            {
                heading: "Overview",
                content: "Uttar Pradesh, India's most populous state, is a treasure trove of culture, history, and spirituality. Known as the birthplace of ancient Indian civilization, it has been home to countless dynasties and has witnessed pivotal moments in Indian history.",
                images: [
                    "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
                    "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800"
                ]
            },
            {
                heading: "Traditional Dress",
                content: "Men traditionally wear dhoti-kurta, sherwani, and achkan. Women adorn beautiful sarees, especially the Banarasi silk saree which is world-famous. The traditional dress also includes salwar-kameez with intricate chikankari embroidery, a specialty of Lucknow.",
                images: [
                    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800"
                ]
            },
            {
                heading: "Famous Personalities",
                content: `
                    <ul>
                        <li><strong>Lal Bahadur Shastri</strong> - Former Prime Minister of India</li>
                        <li><strong>Pandit Jawaharlal Nehru</strong> - First Prime Minister of India</li>
                        <li><strong>Amitabh Bachchan</strong> - Legendary Bollywood actor</li>
                        <li><strong>Munshi Premchand</strong> - Great Hindi novelist</li>
                        <li><strong>Begum Akhtar</strong> - Queen of Ghazal</li>
                        <li><strong>Ravi Shankar</strong> - Sitar maestro</li>
                        <li><strong>Noor Inayat Khan</strong> - WWII hero</li>
                    </ul>
                `,
                images: []
            },
            {
                heading: "Cultural Traditions & Festivals",
                content: "UP celebrates diverse festivals including Diwali with grand celebrations in Ayodhya, Holi in Mathura-Vrindavan, the magnificent Kumbh Mela in Prayagraj, Eid festivities in Lucknow, and Buddha Purnima in Sarnath. The state is known for its classical music traditions, Kathak dance, and Ramlila performances.",
                images: [
                    "https://images.unsplash.com/photo-1609171810665-a0c6d6649e5f?w=800"
                ]
            },
            {
                heading: "Traditional Stories & Epics",
                content: "Uttar Pradesh is the land of the Ramayana, with Ayodhya being Lord Rama's birthplace. Mathura and Vrindavan are associated with Lord Krishna's childhood. The Buddha gave his first sermon in Sarnath near Varanasi. These sacred stories have shaped the spiritual and cultural fabric of the region for millennia.",
                images: [
                    "https://images.unsplash.com/photo-1582736454491-ce10e0c07a33?w=800"
                ]
            },
            {
                heading: "Cuisine & Delicacies",
                content: "The Awadhi cuisine is world-renowned for its kebabs, biryanis, and kormas. Popular dishes include Lucknowi biryani, galouti kebab, tunday kebab, petha from Agra, chaat from Varanasi, and lassi. The state's culinary traditions blend Mughal and local influences.",
                images: [
                    "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800"
                ]
            },
            {
                heading: "Arts & Crafts",
                content: "UP is famous for chikankari embroidery, Banarasi silk weaving, zardozi work, brass work from Moradabad, carpet weaving from Bhadohi, blue pottery, and intricate marble inlay work. These crafts have been passed down through generations of skilled artisans.",
                images: [
                    "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800"
                ]
            },
            {
                heading: "Music & Dance",
                content: "Kathak, one of India's eight classical dances, originated here. The state has rich traditions of thumri, dadra, ghazal, and qawwali. Varanasi and Lucknow have been major centers of Indian classical music, producing legendary musicians and gharanas (schools).",
                videos: [
                    {
                        title: "Kathak Dance Performance",
                        embed: "https://www.youtube.com/embed/VrvcDj-x9lo"
                    }
                ]
            },
            {
                heading: "Historical Monuments",
                content: "The Taj Mahal in Agra, one of the Seven Wonders of the World, the Bara Imambara in Lucknow, Fatehpur Sikri, the ghats of Varanasi, and numerous other architectural marvels showcase the rich heritage of Uttar Pradesh.",
                images: [
                    "https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800",
                    "https://images.unsplash.com/photo-1548013146-72479768bada?w=800"
                ]
            }
        ]
    }
    // Add more states here following the same structure
}

// Function to open culture page in new window
function openCulturePage(stateName) {
    const culture = cultureData[stateName]
    
    if (!culture) {
        alert(`Culture information for ${stateName} is coming soon!`)
        return
    }
    
    // Create HTML content for new page
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${culture.title}</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 60px 20px;
            text-align: center;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
        }
        
        .header h1 {
            font-size: 3em;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.2);
        }
        
        .header p {
            font-size: 1.2em;
            opacity: 0.9;
        }
        
        .container {
            max-width: 1200px;
            margin: 40px auto;
            padding: 0 20px;
        }
        
        .section {
            background: white;
            margin-bottom: 40px;
            border-radius: 15px;
            overflow: hidden;
            box-shadow: 0 10px 30px rgba(0,0,0,0.1);
            animation: fadeInUp 0.6s ease-out;
        }
        
        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .section-header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 25px 30px;
            font-size: 1.8em;
            font-weight: 600;
        }
        
        .section-content {
            padding: 30px;
        }
        
        .section-content p, .section-content ul {
            font-size: 1.1em;
            margin-bottom: 20px;
            color: #555;
        }
        
        .section-content ul {
            list-style: none;
            padding-left: 0;
        }
        
        .section-content ul li {
            padding: 10px 0;
            padding-left: 30px;
            position: relative;
        }
        
        .section-content ul li:before {
            content: "★";
            position: absolute;
            left: 0;
            color: #667eea;
            font-size: 1.2em;
        }
        
        .image-gallery {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }
        
        .image-gallery img {
            width: 100%;
            height: 250px;
            object-fit: cover;
            border-radius: 10px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            cursor: pointer;
        }
        
        .image-gallery img:hover {
            transform: scale(1.05);
            box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        }
        
        .video-container {
            margin-top: 20px;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 5px 15px rgba(0,0,0,0.1);
        }
        
        .video-container iframe {
            width: 100%;
            height: 450px;
            border: none;
        }
        
        .video-title {
            background: #f8f9fa;
            padding: 15px;
            font-weight: 600;
            color: #667eea;
            text-align: center;
        }
        
        .back-btn {
            position: fixed;
            top: 20px;
            left: 20px;
            background: white;
            color: #667eea;
            padding: 12px 25px;
            border-radius: 50px;
            text-decoration: none;
            font-weight: 600;
            box-shadow: 0 4px 15px rgba(0,0,0,0.2);
            transition: all 0.3s ease;
            z-index: 1000;
        }
        
        .back-btn:hover {
            background: #667eea;
            color: white;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }
        
        .footer {
            text-align: center;
            padding: 40px;
            color: #666;
            font-size: 0.9em;
        }
        
        @media (max-width: 768px) {
            .header h1 {
                font-size: 2em;
            }
            
            .video-container iframe {
                height: 250px;
            }
        }
    </style>
</head>
<body>
    <a href="#" onclick="window.close(); return false;" class="back-btn">← Back to Map</a>
    
    <div class="header">
        <h1>${culture.title}</h1>
        <p>Discover the rich cultural heritage and traditions</p>
    </div>
    
    <div class="container">
        ${culture.sections.map((section, index) => `
            <div class="section" style="animation-delay: ${index * 0.1}s">
                <div class="section-header">${section.heading}</div>
                <div class="section-content">
                    ${section.content}
                    
                    ${section.images && section.images.length > 0 ? `
                        <div class="image-gallery">
                            ${section.images.map(img => `
                                <img src="${img}" alt="${section.heading}" loading="lazy">
                            `).join('')}
                        </div>
                    ` : ''}
                    
                    ${section.videos && section.videos.length > 0 ? `
                        ${section.videos.map(video => `
                            <div class="video-container">
                                <div class="video-title">${video.title}</div>
                                <iframe src="${video.embed}" allowfullscreen loading="lazy"></iframe>
                            </div>
                        `).join('')}
                    ` : ''}
                </div>
            </div>
        `).join('')}
    </div>
    
    <div class="footer">
        <p>© 2024 Cultural Heritage of India | Celebrating Our Rich Traditions</p>
    </div>
</body>
</html>
    `
    
    // Open in new window
    const newWindow = window.open('', '_blank', 'width=1200,height=800')
    newWindow.document.write(htmlContent)
    newWindow.document.close()
}