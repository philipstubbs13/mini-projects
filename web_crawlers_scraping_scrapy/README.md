# Intro to Web Crawlers and Scraping With Scrapy

* <https://www.youtube.com/watch?v=ALizgnSFTwQ>
* <https://docs.scrapy.org/en/latest/index.html>
* <https://github.com/scrapy/scrapy>

* Create Virtual Environment:

```bash
python -m venv venv
```

```bash
source ./venv/Scripts/activate
```

```bash
pip install scrapy
```

```bash
scrapy startproject postscrape
```

```bash
 % scrapy crawl posts  
 ```

```bash
scrapy shell https://blog.scrapinghub.com/
response.css('title')
response.css('title').get()
response.css('title::text').get()
response.css('h3::text').get()
response.css('h3::text')[1].get()
response.css('h3::text').getall()
response.css('h3').getall()
response.css('.post-header').getall()
response.css('.post-header').get()
response.css('.post-header a').get()
response.css('.post-header a::text').get()
response.css('.post-header a::text')[1].get()
response.css('p::text').re(r'scraping')
response.css('p::text').re(r's\w+')
response.css('p::text').re(r'(\w+) you (\w+)')
response.xpath('//h3')
response.xpath('//h3/text()').extract()
response.xpath('//h3/text()').getall()
post = response.css('div.post-item')[0]
title = post.css('.post-header h2 a::text')[0].get()
date = post.css('.post-header a::text')[1].get()
```

```bash
>>> for post in response.css('div.post-item'):
...     title = post.css('.post-header h2 a::text')[0].get()
...     date = post.css('.post-header a::text')[1].get()
...     author = post.css('.post-header a::text')[2].get()
...     print(dict(title=title,date=date,author=author))
```

```bash
scrapy crawl posts.json                                                     
```

```bash
scrapy crawl posts -o posts.json  
```
