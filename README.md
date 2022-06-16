# A11y1st - Building the Accessible Web

A11y1st was started to help teach the development community about thinking Accessibility First when it comes to their development and designs. There are many ways to accomplish this and there is no one right way. However, there are ways that can be chosen as the way to go for now and if they need to improve, they improve. 


# We all want to help
A11y1st is not about leading by example or leading from behind. Representation and inclusion is just that, being included. We can all learn from one another. There are no instructors here, only students. Some may have more experience but that by no means reflects a leader and follower dynamic. A11y1st will be available for the community to be involved in. All of our examples will be freely available on Github, all images and content will be Creative Commons licensed for anyone to use.

# Grow with us 
A11y1st comes from the experience of Wayne Renbjor, the owner of WCR Studios (A Marketing and Web Agency) in the South Jersey and Philadelphia area. We are looking for article writers! Articles require their own sub folder. Any supported images must be places in the images subfolder for the article. Supported formats for content is Liquid templates. Supported formats for images is png, jpg, and svg.

Please contact Wayne with an article idea. You will need to submit a new PR for the article, we also prefer that the article lighthouse tests at 95% or above for accessibility. If there is nothing more than texts, images, and links it should test at 100%.

# Project info

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


