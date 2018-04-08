# freaky-phobias

  This is a google chrome extension made with javaScript and html to demonstrate how certain images that a user trains microsoft's custom vision with can be replaced with other images. This software tool can be utilized by teachers or employeers to increase productivity in the workplace/school by preventing employees/students from seeing the majority of inappropriate images.

  We specifically made the software to block all spongebob memes with a model made with microsoft custom vision.
Microsoft custom vision works by prompting the user to submit  pictures (either unlabeled or having the user label them his or herself), teaching itself which important concepts to use when classifying images, and finally tag images with successful classifcations.

  Our software framework sits on top of this computer vision model and creates an arrray of all images on a webpage before vetting each one through the specifically-trained custom vision tool. If the tool identifies an image as being a spongebob meme with a high degree of certainty, the tool replaces the image with an image the user selects before the program starts running. In this specific instance, our tool replaces spongebob memes with an image of a guitar playing gentleman riding a cumulus cloud.

  Further image training could make the model very accurate, but no amount of training could ever make the system 100% accurate. However, this isn't the problem the tool is trying to solve. The tool was designed in mind of the fact that a 100% image filtration is an unrealistic ideal. It aims to prevent the majority of unproductive images (chosen by the user) from being seen and it accopmplishes this within tolerance.

!["Gentleman on Cumulus Cloud](https://github.com/agathaturya/freaky-phobias/blob/master/icon.png)
