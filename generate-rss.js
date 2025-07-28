const fs = require('fs');

function escapeXml(unsafe) {
    return unsafe.replace(/[<>&'"]/g, function (c) {
        switch (c) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            case '\'': return '&apos;';
            case '"': return '&quot;';
        }
    });
}

function extractTitle(content) {
    const match = content.match(/<p>([^<]+)<\/p>/);
    if (match) {
        const firstParagraph = match[1];
        if (firstParagraph.length <= 50) {
            return firstParagraph;
        }
        const words = firstParagraph.split(' ');
        let title = '';
        for (const word of words) {
            if ((title + ' ' + word).length > 50) break;
            title += (title ? ' ' : '') + word;
        }
        return title + '...';
    }
    return 'Blog Post';
}

function generateRSS() {
    const blogPosts = JSON.parse(fs.readFileSync('blog-posts.json', 'utf8'));
    const posts = blogPosts.posts.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    const latestDate = posts.length > 0 ? new Date(posts[0].date).toUTCString() : new Date().toUTCString();
    
    let rssItems = '';
    
    for (const post of posts) {
        const title = escapeXml(extractTitle(post.content));
        const pubDate = new Date(post.date).toUTCString();
        
        rssItems += `    
    <item>
      <title>${title}</title>
      <link>https://rtnw.app/#${post.id}</link>
      <guid isPermaLink="false">${post.id}</guid>
      <pubDate>${pubDate}</pubDate>
      <description><![CDATA[${post.content}]]></description>
    </item>`;
    }
    
    const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>RightNow Blog</title>
    <link>https://rtnw.app/</link>
    <description>Updates from Alex about RightNow - a capacity-first productivity app</description>
    <language>en-gb</language>
    <atom:link href="https://rtnw.app/rss.xml" rel="self" type="application/rss+xml"/>
    <lastBuildDate>${latestDate}</lastBuildDate>
    <generator>RightNow RSS Generator</generator>${rssItems}
  </channel>
</rss>`;
    
    fs.writeFileSync('rss.xml', rss, 'utf8');
    console.log('RSS feed generated successfully!');
}

generateRSS();