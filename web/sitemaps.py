from django.contrib.sitemaps import Sitemap
from django.urls import reverse

class StaticViewSitemap(Sitemap):
    changefreq = "monthly"
    priority = 0.8

    def items(self):
        return [
            'home',
            'about',
            'services',
            'credentials',
            'blog',
            'contact',
            'privacy',
            'terms',
            'blog1',
            'blog2',
            'blog3',
            'blog4',
            'cookies',
            'industries',
            'assessment_form',
        ]

    def location(self, item):
        return reverse(item)
