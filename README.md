# A11y1st - Building the Accessible Web

A11y1st was started to help teach the development community about thinking Accessibility First when it comes to their development and designs. There are many ways to accomplish this and there is no one right way. However, there are ways that can be chosen as the way to go for now and if they need to improve, they improve. 


# We all want to help
A11y1st is not about leading by example or leading from behind. Representation and inclusion is just that, being included. We can all learn from one another. There are no instructors here, only students. Some may have more experience but that by no means reflects a leader and follower dynamic. A11y1st will be available for the community to be involved in. All of our examples will be freely available on Github, all images and content will be Creative Commons licensed for anyone to use.

# Grow with us 
A11y1st comes from the experience of Wayne Renbjor, the owner of WCR Studios (A Marketing and Web Agency) in the South Jersey and Philadelphia area. We are looking for article writers! Articles require their own sub folder. Any supported images must be places in the images subfolder for the article. Supported formats for content is Liquid templates. Supported formats for images is png, jpg, and svg.

Please contact Wayne with an article idea. You will need to submit a new PR for the article, we also prefer that the article lighthouse tests at 95% or above for accessibility. If there is nothing more than texts, images, and links it should test at 100%.

# Project info and Development Process

Templating system is [Liquid](https://liquidjs.com/tutorials/intro-to-liquid.html). This mixes HTML with "{{ }}" vars.

The static code generation is [11ty](https://www.11ty.dev/). 11ty supports several templating methods. You are welcome to use Markdown if you like but you lose styling capability.

The Source Control is manages on [Github](https://github.com/Wrenbjor/a11y1st) using a [classic Git-Flow](https://datasift.github.io/gitflow/IntroducingGitFlow.html) branch model with the only modification is that Github now uses 'main' in favor of 'master' as a primary branch. Once you clone the repo, please checkout the 'develop' branch then start a new 'feature' for your new article or submit corrections to an article that already exists. You will have to submit a pull request (PR) to have your branch reviewed for the following:

- Spelling
- Grammar
- Accessibility
  - Alt tags on images
  - Proper header order
  - font size and color
  - Keyboard navigation
  - Aria tags when necessary
- Relevance to the Accessibility Development and Design community

----

## Starting A New Article

When creating a new article, first create a new 'feature' branch using 

```bash
git flow feature start feature/article-name-goes-here
```
use [Kebab-case](https://www.theserverside.com/definition/Kebab-case) naming conventions which-have-a-dash-for-each-space.
Any images should be stored in an 'images' subfolder within your article directory.

Use ``` yarn start ``` to start the 11ty realtime local server for development purposes.

Please create an ``` index.liquid ``` file as the main article body. We also ask that you include the following metadata:

```liquid

---
title: 'Your articles main title'
subtitle: 'A subtitle for clarity'
featureimg: images/featuredImage.png
---

```

A title is the main title of the article, please try to keep this short.
A subtitle can also be added.
Please inclue a featured image of 800x600 or a (4x3) dimention as it is used with the title and subtitle in the main page listing.

The primary article template has a placeholder for the title and subtitle so you do not need to include it in your own article. Please reffer to any existing article as examples.

We are using the[Bulma CSS Framework](https://bulma.io/documentation/) for styling. Here is a simple template you can use to start a new article:

```html

---
title: 'Your articles main title'
subtitle: 'A subtitle for clarity'
featureimg: images/featuredImage.png
---


<article class="tir">
    <div class="columns is-mobile is-centered mb-5">
        <div class="column is-8 mt-6">
            <img src={{ featureimg }} alt="Article Logo" />
        </div>
    </div>
    <div class="columns is-mobile is-centered mb-5">
        <div class="column is-8">
          <p>Content</p>
        </div>
    </div>
</article>

```

The class named 'tir' is a font class. We use a publicly available font called [Tiresias InfoFont](https://www.fontsquirrel.com/fonts/Tiresias-Infofont) which was designed by the [Royal National Institute of Blind People](https://www.rnib.org.uk/) specifically for accessibility readability for people with eyesight that is starting to deterriate.

Your article is not required to use this font, but we think it looks great!

----
## Building and Submitting Code

Use ``` yarn build ``` to run the 11ty build system which is already configured for the production folder formats and 11ty configurations.

Once your build is complete, commit your feature branch then run 
```bash 
git flow feature finish article-name-goes-here
```
note that when you make the feature you prefix the folder with ``` 'feature/' ```  but when you finish it, the prefix is not required.

Once your changes have merged into ``` 'develop' ``` you can then push your branch and create a pull request.
