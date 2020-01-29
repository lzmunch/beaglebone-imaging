var report1 = 
"Major Changes:\n\
There is a freshman Computer Science and Art major who was interested in joining the project. We are working on determining her role, which may change the goal of the project.\n\
Progress:\n\
I have been able to connect the beaglebone to my computer and run and write scripts on it. There is still problems with connecting it to the internet to conveniently sync file across multiple beaglebones via git. \n\
I am currently working on implementing HDR imaging, with the algorithm outlined in this paper : Debevec and Malik. So far, I have been able to mostly complete the first step, which is to find a mapping from pixel value to real world irradiance (called the response function). I've been able to take a sequence of photos at various exposures, create a mapping from exposure time to pixel value, and create an inverse mapping from pixel value to exposure time. Under the right lighting conditions, the curves generated are similar to the ones in the paper. This still needs more fine tuning, as getting 'good-looking' curves required changing the scaling and throwing out many 'bad' points(negative, out of range, etc).\n\
Based on the response function I have far, I attempted to do the next step, which is constructing the HDR image. This exploded--it did not work at all. \n\
Parallel to all this, I've also been looking at how the different color channels might be affecting my results (I am using a raw image from the camera). Below is a map of pixel values as a function of exposure time, for each color channel. This also varies based on the lighting.\n\
I did not anticipate how difficult it would be to get started implementing HDR imaging, since it seemed simple in theory, so I did not meet my first milestone. The finer details of the algorithm took an extra week understand (I am probably still be missing some things).\n\
Next Steps:\n\
The next steps are to attempt to construct the HDR image in chunks, rather than the whole image, just to see how the entire process pans out. The response function needs more work. I will have to ask for more involved help from Matt to figure out a better way to select pixels in the images to construct the response function and why the color channels are inconsistent.\n\
Revisions:\n\
All milestones will be pushed back to the next milestone (i.e. I will aim to have HDR completed in the next two weeks). I think the limitations of the hardware will make it difficult to implement a functionality every two weeks, so I will revisit this at the next milestone.\n\
Resources Needed: None\n\
";