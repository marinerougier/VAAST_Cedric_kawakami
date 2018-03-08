// LICENCE -----------------------------------------------------------------------------
//
// Copyright 2018 - Cédric Batailler
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this
// software and associated documentation files (the "Software"), to deal in the Software
// without restriction, including without limitation the rights to use, copy, modify,
// merge, publish, distribute, sublicense, and/or sell copies of the Software, and to
// permit persons to whom the Software is furnished to do so, subject to the following
// conditions:
//
// The above copyright notice and this permission notice shall be included in all copies
// or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
// INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
// PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
// HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
// CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
// OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
//
// OVERVIEW -----------------------------------------------------------------------------
//
// keen.io initialization ---------------------------------------------------------------
// This part will work only if stream_projectID & stream_writeKey have been defined.
// nb: the bang (!) is for self-invoking function.

!function(name,path,ctx){
  'use strict';
  var latest,prev=name!=='Keen'&&window.Keen?window.Keen:false;ctx[name]=ctx[name]||{ready:function(fn){var h=document.getElementsByTagName('head')[0],s=document.createElement('script'),w=window,loaded;s.onload=s.onerror=s.onreadystatechange=function(){if((s.readyState&&!(/^c|loade/.test(s.readyState)))||loaded){return}s.onload=s.onreadystatechange=null;loaded=1;latest=w.Keen;if(prev){w.Keen=prev}else{try{delete w.Keen}catch(e){w.Keen=void 0}}ctx[name]=latest;ctx[name].ready(fn)};s.async=1;s.src=path;h.parentNode.insertBefore(s,h)}}
}('KeenAsync','https://d26b395fwzu5fz.cloudfront.net/keen-tracking-1.1.3.min.js',this);

// Variable input -----------------------------------------------------------------------
// Variable used to define experimental condition.

var vaast_approach_training = jsPsych.randomization.sampleWithoutReplacement(["maths", "arts"], 1)[0];
; // either "arts" or "maths

var iat_self    = jsPsych.randomization.sampleWithoutReplacement(["left", "right"], 1)[0];; // either "left" or "right"
var iat_maths_1 = jsPsych.randomization.sampleWithoutReplacement(["left", "right"], 1)[0];; // either "left" or "right"

var jspsych_id  = jsPsych.randomization.randomID();
var prolific_pid = jsPsych.data.getURLVariable('PROLIFIC_PID');

// check if URL prolific_pid exists and set prolific_pid to "" if it does not

if(prolific_pid == null) {prolific_pid = "";}

// VAAST --------------------------------------------------------------------------------
// VAAST variables ----------------------------------------------------------------------

var arts_movement  = undefined;
var maths_movement = undefined;

var approach_cat   = undefined;
var avoidance_cat  = undefined;

switch(vaast_approach_training) {
  case "maths":
    arts_movement  = "avoidance";
    maths_movement = "approach";
    approach_cat   = "maths";
    avoidance_cat  = "arts";
    break;

  case "arts":
    arts_movement = "approach";
    maths_movement = "avoidance";
    approach_cat   = "arts";
    avoidance_cat  = "maths";
    break;
}

// VAAST stimuli ------------------------------------------------------------------------
// vaast image stimuli ------------------------------------------------------------------

var vaast_stim = [
  {stimulus: 'stimuli/arts_01.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_02.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_03.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_04.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_05.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_06.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_07.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_08.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_09.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_10.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_11.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_12.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_13.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_14.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_15.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_16.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_17.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_18.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_19.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_20.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_21.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_22.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_23.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_24.jpg',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/maths_01.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_02.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_03.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_04.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_05.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_06.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_07.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_08.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_09.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_10.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_11.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_12.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_13.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_14.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_15.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_16.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_17.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_18.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_19.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_20.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_21.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_22.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_23.jpg', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_24.jpg', category: "maths", movement: maths_movement}
];

// vaast background images --------------------------------------------------------------

var background = [
  "background/2.jpg",
  "background/3.jpg",
  "background/4.jpg",
  "background/5.jpg",
  "background/6.jpg"
];


// vaast stimuli sizes -------------------------------------------------------------------

var stim_sizes = [
  282,
  302,
  324,
  350,
  382
];

// Helper functions ---------------------------------------------------------------------
// next_position():
// Compute next position as function of current position and correct movement. Because
// participant have to press the correct response key, it always shows the correct
// position.
var next_position = function(){
  var current_position = jsPsych.data.getLastTrialData().values()[0].position;
  var current_movement = jsPsych.data.getLastTrialData().values()[0].movement;
  var position = current_position;

  if(current_movement == "approach") {
    position = position + 1;
  }

  if(current_movement == "avoidance") {
    position = position -1;
  }

  return(position)
}

// get_id():
// Get id input.
var get_id = function() {
  var prolific_id = jsPsych.data.getDataByTimelineNode("0.0-2.0").values()[0].responses.slice(7, -2);
  return(id)
}

// Saving blocks ------------------------------------------------------------------------
// Every function here send the data to keen.io. Because data sent is different according
// to trial type, there are differents function definition.

// init ---------------------------------------------------------------------------------
var saving_id = function(){

  prolific_id = jsPsych.data.getDataByTimelineNode("0.0-2.0").values()[0].responses.slice(7, -2);

  KeenAsync.ready(function(){
    var client = new KeenAsync({
      projectId: stream_projectID,
      writeKey: stream_writeKey,
    });
    if(data_stream) {
      client.recordEvent('prolific_id_stream', {
        session_id: jspsych_id,
        prolific_id: prolific_id,
        vaast_approach_training: vaast_approach_training,
        iat_self_side: iat_self,
        iat_maths_1_side: iat_maths_1,
      });
    }
  });
}

// vaast trial --------------------------------------------------------------------------
var saving_vaast_trial = function(){
  KeenAsync.ready(function(){
    var client = new KeenAsync({
      projectId: stream_projectID,
      writeKey: stream_writeKey
    });
    if(data_stream) {
      client.recordEvent('vaast_stream', {
        session_id: jspsych_id,
        prolific_id: prolific_id,
        vaast_approach_training: vaast_approach_training,
        iat_self_side: iat_self,
        iat_maths_1_side: iat_maths_1,
        vaast_trial_data: jsPsych.data.get().last(3).json()
      });
    }
  });
}

// iat trial ----------------------------------------------------------------------------
var saving_iat_trial = function(){
  KeenAsync.ready(function(){
    var client = new KeenAsync({
      projectId: stream_projectID,
      writeKey: stream_writeKey
    });
    if(data_stream) {
      client.recordEvent('iat_stream', {
        session_id: jspsych_id,
        prolific_id: prolific_id,
        vaast_approach_training: vaast_approach_training,
        iat_self_side: iat_self,
        iat_maths_1_side: iat_maths_1,
        iat_trial_data: jsPsych.data.get().last().json()
      });
    }
  });
}

var saving_browser_events = function() {
  KeenAsync.ready(function(){
    var client = new KeenAsync({
        projectId: stream_projectID,
        writeKey: stream_writeKey
      });
      if(data_stream) {
        client.recordEvent('meta_info_stream', {
          session_id: jspsych_id,
          event_data: jsPsych.data.getInteractionData().json()
        });
      }
  });
}
// saving blocks ------------------------------------------------------------------------
var save_id = {
    type: 'call-function',
    func: saving_id
}

var save_vaast_trial = {
    type: 'call-function',
    func: saving_vaast_trial
}

var save_iat_trial = {
    type: 'call-function',
    func: saving_iat_trial
}

// EXPERIMENT ---------------------------------------------------------------------------
// Initialize timeline ------------------------------------------------------------------

var timeline = [];

// Switching to fullscreen --------------------------------------------------------------
var fullscreen_trial = {
  type: 'fullscreen',
  message:  '<p>To take part in this experiment, your browser needs to be set on fullscreen.</p>',
  button_label: 'Switch to fullscreen',
  fullscreen_mode: true
}

timeline.push(fullscreen_trial)


// ping keen.io -------------------------------------------------------------------------

var keen_ping = {
    type: 'keen-ping',
    loader_image: 'media/loading.gif',
    stream_name: 'ping_stream',
    write_key: stream_writeKey,
    project_id: stream_projectID
  }

  timeline.push(keen_ping)


// Prolific identification --------------------------------------------------------------
var prolific_pid = jsPsych.data.getURLVariable('PROLIFIC_PID');

if(prolific_pid == null) {prolific_pid = "";}

var prolific_id = {
 type: 'survey-text',
  questions: [{prompt: "Please enter your Prolific ID:", value: prolific_pid}],
  button_label: "Start the experiment"
};

timeline.push(prolific_id, save_id);

// Initial instructions -----------------------------------------------------------------
// First slide --------------------------------------------------------------------------
var instructions = {
  type: "html-keyboard-response",
  stimulus: "<h1 class ='custom-title'> Welcome </h1>" +
            "<p>Thank you for deciding to complete this study. <br>" +
            "In this study, you will have engage in different tasks. </p>" +
            "<p class = 'continue-instructions'>Press <strong>space</strong> to start training.</p>",
  choices: [32]
};

timeline.push(instructions);

// VAAST --------------------------------------------------------------------------------
var vaast_instructions_1 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Task 1 </h1>" +
    "<p class='instructions'>In the first task, just like in a videogame, you" +
    " will act within the environnement presented below.</p>" +
    "<p class='instructions'> You will be able to move forward and backward" +
    " using your arrow keys on your keyboard.</p>" +
    "<p class='instructions'>Some pictures will appear within the" +
    " environnement and you will have to approach them or avoid them" +
    " according to the category they belong to.</p>" +
    "<br>" +
    "<img src = 'media/vaast-background.png'>" +
    "<br>" +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to" +
    " continue.</p>",
  choices: [32]
};

var vaast_instructions_2 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Task 1 </h1>" +
    "<p class='instructions'>Some pictures will appear within the" +
    " environnement and you will have to approach them or avoid them" +
    " according to the category they belong to.</p>" +
    "<br>" +
    "<img src = 'media/vaast-background.png'>" +
    "<br>" +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to" +
    " continue.</p>",
  choices: [32]
};

var vaast_instructions_3 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Task 1 </h1>" +
    "<p class='instructions'>In this task, you will have to respond using arrow keys on your " +
    "keyboard. For every trial, once the picture appeared, you will " +
    "have to press the quickest as possible either on the \"approach\" key or the " +
    "\"avoid\" key (see below).</p>" +
    "<p class='instructions'>Note that you will have to press twice the correct " +
    "key to pass the trial.</p>" +
    "<br>" +
    "<img src = 'media/keyboard-vaastt.png'>" +
    "<br>" +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to continue.</p>",
  choices: [32]
};

var vaast_instructions_4 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Task 1 </h1>" +
    "<p class='instructions'>Your instructions are to <span class='vaast-movement-instructions'>approach " +
     approach_cat + "-related pictures</span> and to <span class='vaast-movement-instructions'>avoid " +
     avoidance_cat + "-related pictures</span>. </p>" +
    "<p class='instructions'>It is very important to remember which action you will" +
    " have to perform with each category. You need this information to complete the " +
    "task successfully. Please make sure that you will remember these instructions before "+
    "you start the training block of this task.</p>" +
     "<table align='center' class='vaast-table-instruction'>" +
       "<tr>" +
         "<th><img src='media/" + approach_cat + "_exemple.bmp'></th>" +
         "<th><img src='media/" + avoidance_cat + "_exemple.bmp'></th>" +
       "</tr>" +
       "<tr>" +
         "<th>Approach</th>" +
         "<th>Avoid</th>" +
       "</tr>" +
     "</table>" +
    "<p class = 'continue-instructions'>Press <strong>enter</strong> to start training.</p>",
  choices: [13]
};


timeline.push(
  vaast_instructions_1,
  // vaast_instructions_2,
  vaast_instructions_3,
  vaast_instructions_4
  );
// Creating a trial ---------------------------------------------------------------------

var vaast_fixation = {
  type: 'vaast-fixation',
  fixation: "+",
  font_size:  324,
  position: 2,
  background_images: background
}

var vaast_first_step = {
  type: 'vaast-image',
  stimulus: jsPsych.timelineVariable('stimulus'),
  position: 2,
  background_images: background,
  stim_sizes:  stim_sizes,
  approach_key: "uparrow",
  avoidance_key: "downarrow",
  stim_movement: jsPsych.timelineVariable('movement'),
  html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
  force_correct_key_press: true,
  display_feedback: true,
  response_ends_trial: true
}

var vaast_second_step = {
  type: 'vaast-image',
  position: next_position,
  stimulus: jsPsych.timelineVariable('stimulus'),
  background_images: background,
  stim_sizes:  stim_sizes,
  approach_key: "uparrow",
  avoidance_key: "downarrow",
  stim_movement: jsPsych.timelineVariable('movement'),
  html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
  force_correct_key_press: true,
  display_feedback: true,
  response_ends_trial: true
}

var vaast_third_step = {
  type: 'vaast-image',
  position: next_position,
  stimulus: jsPsych.timelineVariable('stimulus'),
  background_images: background,
  stim_sizes:  stim_sizes,
  stim_movement: jsPsych.timelineVariable('movement'),
  response_ends_trial: false,
  trial_duration: 650
}

// VAAST training block -----------------------------------------------------------------

var vaast_training_block = {
  timeline: [vaast_fixation, vaast_first_step, vaast_second_step, vaast_third_step, save_vaast_trial],
  timeline_variables: vaast_stim,
  sample: {
    size: 16,
    type: 'without-replacement',
  },
  randomize_order: true,
};

var vaast_test_block = {
  timeline: [vaast_fixation, vaast_first_step, vaast_second_step, vaast_third_step, save_vaast_trial],
  timeline_variables: vaast_stim,
  repetitions: 1,
  randomize_order: true
};

var vaast_instructions_5 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Task 1 </h1>" +
    "<p class='instructions'>Training block is now over. </p>" +
    "<p class='instructions'>You will now have to repeat this task for 10 new blocks." +
    " Instructions are the same as in the training block of this task." +
    "</p>" +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to start blocks n°1.</p>",
  choices: [32]
};

var vaast_block_instructions = function(n)  {
  var block_instructions = {
    type: "html-keyboard-response",
    stimulus:
      "<h1 class ='custom-title'> Task 1 </h1>" +
      "<p class='instructions'>Training block is now over. </p>" +
      "<p class='instructions'>You will now have to repeat this task for 10 new blocks." +
      " Instructions are the same as in the training block of this task." +
      "</p>" +
      "<p class = 'continue-instructions'>Press <strong>space</strong> to start blocks n°"+ n +".</p>",
    choices: [32]
  };

  return(block_instructions)
}

timeline.push(
  vaast_training_block,
  vaast_instructions_5,
  vaast_test_block,
  // vaast_block_instructions(2),
  // vaast_test_block,
  // vaast_block_instructions(3),
  // vaast_test_block,
  // vaast_block_instructions(4),
  // vaast_test_block,
  // vaast_block_instructions(5)
 );

var vaast_instructions_6 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Task 1 </h1>" +
    "<p class='instructions'>This part of the experiment is now over. </p>" +
    "<p class = 'continue-instructions'>Press <strong>space</strong> to start Task 2.</p>",
  choices: [32]
};

timeline.push(vaast_instructions_6);
// IAT ----------------------------------------------------------------------------------
// IAT variable initialization ----------------------------------------------------------
// Correct responses -----------------------
var self_side      = undefined;
var other_side     = undefined;
var maths_side_1st = undefined;
var arts_side_1st  = undefined;
var maths_side_2nd = undefined;
var arts_side_2nd  = undefined;

// Label -----------------------------------
var block_1_left_label          = undefined;
var block_1_right_label         = undefined;
var block_2_left_label          = undefined;
var block_2_right_label         = undefined;
var block_3_left_label_top      = undefined;
var block_3_right_label_top     = undefined;
var block_3_left_label_bottom   = undefined;
var block_3_right_label_bottom  = undefined;
var block_4_left_label          = undefined;
var block_4_right_label         = undefined;
var block_5_left_label_top      = undefined;
var block_5_right_label_top     = undefined;
var block_5_left_label_bottom   = undefined;
var block_5_right_label_bottom  = undefined;

switch(iat_self) {
  case "left":
        self_side               = "left";
        other_side              = "right";

        block_1_left_label      = "SELF";
        block_1_right_label     = "OTHER";
        block_3_left_label_top  = "SELF";
        block_3_right_label_top = "OTHER";
        block_5_left_label_top  = "SELF";
        block_5_right_label_top = "OTHER";

    break;

  case "right":
        self_side               = "right";
        other_side              = "left";

        block_1_left_label      = "OTHER";
        block_1_right_label     = "SELF";
        block_3_left_label_top  = "OTHER";
        block_3_right_label_top = "SELF";
        block_5_left_label_top  = "OTHER";
        block_5_right_label_top = "SELF";

    break;
}

switch(iat_maths_1) {
  case "left":
      maths_side_1st = "left";
      arts_side_1st  = "right";
      maths_side_2nd = "right";
      arts_side_2nd  = "left";

    block_2_left_label          = "MATHS";
    block_2_right_label         = "ARTS";
    block_3_left_label_bottom   = "MATHS";
    block_3_right_label_bottom  = "ARTS";
    block_4_left_label          = "ARTS";
    block_4_right_label         = "MATHS";
    block_5_left_label_bottom   = "ARTS";
    block_5_right_label_bottom  = "MATHS";

    break;

  case "right":
        maths_side_1st = "right";
        arts_side_1st  = "left";
        maths_side_2nd = "left";
        arts_side_2nd  = "right";

    block_2_left_label          = "ARTS";
    block_2_right_label         = "MATHS";
    block_3_left_label_bottom   = "ARTS";
    block_3_right_label_bottom  = "MATHS";
    block_4_left_label          = "MATHS";
    block_4_right_label         = "ARTS";
    block_5_left_label_bottom   = "MATHS";
    block_5_right_label_bottom  = "ARTS";

    break;
}

// iat instructions ---------------------------------------------------------------------

var iat_instructions_1 = {
  type: "html-keyboard-response",
  stimulus:
    "<h1 class ='custom-title'> Task 2 </h1>" +
    "<p class='instructions'>In this part, you will be asked to sort words" +
    " into groups as fast as you can using the keyboard. The following is a" +
    " list of category labels and the items that belong to each of those categories." +
    "</p>" +
    "<table>" +
      "<tr>" +
        "<th width='200px'>Category</th>" +
        "<th align='left'>Item</th>" +
      "</tr>" +
      "<tr>" +
        "<td>SELF</td>" +
        "<td align='left'>I, me, my, mine</td>" +
      "</tr>" +
      "<tr>" +
        "<td>OTHER</td>" +
        "<td align='left'>they, theirs, them, themselves</td>" +
      "</tr>" +
      "<tr>" +
        "<td>ARTS</td>" +
        "<td align='left'>poetry, literature, theater, symphony</td>" +
      "</tr>" +
      "<tr>" +
        "<td>MATHS</td>" +
        "<td align='left'>calculus, equation, geometry, statistics</td>" +
      "</tr>" +
    "</table>" +
    "<h3 class='instructions'>Instructions</h3>" +
    "<ul class='instructions'>" +
      "<li>Keep fingers on the 'e' and 'i' keys to enable rapid response.</li>" +
      "<li>Labels at the top will tell you which items go with each key.</li>" +
      "<li>Go as fast as you can.</li>" +
    "</ul>" +
    "<p>&nbsp;</p>" +
    "<p class = 'continue-instructions'>Press <span class='key'>space</span>" +
    " to continue.</p>",
  choices: [32]
};

// iat block instructions ---------------------------------------------------------------

var iat_instructions_block_1 = {
  type: 'html-keyboard-response',
  stimulus:
  "<div style='position: absolute; top: 18%; left: 20%'> <p>Press " +
    "<span class='key'>E</span> for:<br><span class='iat-category self-other'>" +
    block_1_left_label  +
    "</span></p>" +
    "</div>" +
    "<div style='position: absolute; top: 18%; right: 20%'><p>Press " +
    "<span class='key'>I</span> for:<br><span class='iat-category self-other'>" +
    block_1_right_label +
    "</span></p>" +
  "</div>" +
  "<div class='iat-instructions' style='position: relative; top: 42%, width:80%;'> " +
    "<p class='instructions'>" +
      "In the next task, you will have to put your middle or index fingers on the <span class='key'>E</span> " +
      "and <span class='key'>I</span> keys of your keyboard. Words representing the categories at the top " +
      "will appear one-by-one in the middle of the screen. " +
      "When the item belongs to a category on the left, press the <span class='key'>E</span> key; when the item " +
      "belongs to a category on he right, press the <span class='key'>I</span> key. Items belong to only one category. " +
      "If you make an error, an X will appear - fix the error by hitting the other key." +
    "</p>" +
    "<p class='instructions'>" +
      "This is a timed sorting task. GO AS FAST AS YOU CAN while making as few mistakes as possible. " +
    "</p>" +
  "</div> " +
  "<br>" +
  "<p class = 'continue-instructions'>Press <span class='key'>space bar</span> when you are ready to start.</p>",
  choices: [32]
};

var iat_instructions_block_2 = {
  type: 'html-keyboard-response',
  stimulus:
  "<div style='position: absolute; top: 18%; left: 20%'> <p>Press " +
    "<span class='key'>E</span> for:<br><span class='iat-category maths-arts'>" +
    block_2_left_label  +
    "</span></p>" +
    "</div>" +
    "<div style='position: absolute; top: 18%; right: 20%'><p>Press " +
    "<span class='key'>I</span> for:<br><span class='iat-category maths-arts'>" +
    block_2_right_label +
    "</span></p>" +
  "</div>" +
  "<div class='iat-instructions' style='position: relative; top: 42%, width:80%;'> " +
    "<p class='instructions'>" +
      "See above, the categories have changed. The items for sorting have changed as well. " +
      "The rules, howerver, are the same." +
    "</p>" +
    "<p class='instructions'>" +
      "When the items belong to a category to the left, press the <span class='key'>E</span> key; " +
      "when the item belongs to a category on the right, press the <span class='key'>I</span> key. " +
      "Items belong to only one category. " +
      "An X will appears after an error - fix the error by hitting the other key. " +
      "GO AS FAST AS YOU CAN. " +
    "</p>" +
  "</div> " +
  "<br>" +
  "<p class = 'continue-instructions'>Press <span class='key'>space bar</span> when you are ready to start.</p>",
  choices: [32]
};

var iat_instructions_block_3 = {
  type: 'html-keyboard-response',
  stimulus:
  "<div style='position: absolute; top: 18%; left: 20%'><p>" +
    "Press <span class='key'>E</span> for:<br> " +
    "<span class='iat-category self-other'>" + block_3_left_label_top  + "</span>" +
    "<br>or<br>" +
    "<span class='iat-category maths-arts'>" + block_3_left_label_bottom + "</span>" +
  "</p></div>" +
  "<div style='position: absolute; top: 18%; right: 20%'><p>" +
    "Press <span class='key'>I</span>  for:<br>" +
    "<span class='iat-category self-other'>" + block_3_right_label_top + "</span>" +
    "<br>or<br>" +
    "<span class='iat-category maths-arts'>" + block_3_right_label_bottom  + "</span>" +
  "</p></div>" +
  "<div class='iat-instructions' style='position: relative; top: 42%'> "+
    "<p class='instructions'>" +
    "See above, the four categories you saw separately now appear together. " +
    "Remember, each item belongs to only one group." +
    "</p>" +
    "<p class='instructions'>" +
    "The <span class='maths-arts'>green</span> and <span class='self-other'>black</span> labels " +
    "and items may help to identify the appropriate category. " +
    "Use the <span class='key'>E</span> and <span class='key'>I</span> keys to categorize " +
    "items into the four groups left and right, and correct errors by hitting the other key." +
    "</p>" +
  "</div> " +
  "<br />" +
  "<p class = 'continue-instructions'>Press <span class='key'>space bar</span> when you are ready to start.</p>",
  choices: [32]
};

var iat_instructions_block_3_test = {
  type: 'html-keyboard-response',
  stimulus:
  "<div style='position: absolute; top: 18%; left: 20%'><p>" +
    "Press <span class='key'>E</span> for:<br> " +
    "<span class='iat-category self-other'>" + block_3_left_label_top  + "</span>" +
    "<br>or<br>" +
    "<span class='iat-category maths-arts'>" + block_3_left_label_bottom + "</span>" +
  "</p></div>" +
  "<div style='position: absolute; top: 18%; right: 20%'><p>" +
    "Press <span class='key'>I</span>  for:<br>" +
    "<span class='iat-category self-other'>" + block_3_right_label_top + "</span>" +
    "<br>or<br>" +
    "<span class='iat-category maths-arts'>" + block_3_right_label_bottom  + "</span>" +
  "</p></div>" +
  "<div class='iat-instructions' style='position: relative; top: 42%'> "+
    "<p class='instructions'>" +
    "Sort the same four categories again. Remember to go as fast as you can while " +
    "making as few mistakes as possible." +
    "</p>" +
    "<p class='instructions'>" +
    "The <span class='maths-arts'>green</span> and <span class='self-other'>black</span> labels " +
    "and items may help to identify the appropriate category. " +
    "Use the <span class='key'>E</span> and <span class='key'>I</span> keys to categorize " +
    "items into the four groups left and right, and correct errors by hitting the other key." +
    "</p>" +
  "</div> " +
  "<br />" +
  "<p class = 'continue-instructions'>Press <span class='key'>space bar</span> when you are ready to start.</p>",
  choices: [32]
};

var iat_instructions_block_4 = {
  type: 'html-keyboard-response',
  stimulus:
  "<div style='position: absolute; top: 18%; left: 20%'> <p>Press " +
    "<span class='key'>E</span> for:<br><span class='iat-category maths-arts'>" +
    block_4_left_label  +
    "</span></p>" +
    "</div>" +
    "<div style='position: absolute; top: 18%; right: 20%'><p>Press " +
    "<span class='key'>I</span> for:<br><span class='iat-category maths-arts'>" +
    block_4_right_label +
    "</span></p>" +
  "</div>" +
  "<div class='iat-instructions' style='position: relative; top: 42%, width:80%;'> " +
    "<p class='instructions'>" +
      "Notice above, there are only two categories and they have switched positions. " +
      "The concept that was previously on the left is now on the right, and the concept " +
      "that was on the right is now on the left. Practice this new configuration."  +
    "</p>" +
    "<p class='instructions'>" +
      "Use the <span class='key'>E</span> and <span class='key'>I</span> keys " +
      "to categorize items left and right, and correct error " +
      "by hitting the other key." +
    "</p>" +
  "</div> " +
  "<br>" +
  "<p class = 'continue-instructions'>Press <span class='key'>space bar</span> when you are ready to start.</p>",
  choices: [32]
};

var iat_instructions_block_5 = {
  type: 'html-keyboard-response',
  stimulus:
  "<div style='position: absolute; top: 18%; left: 20%'><p>" +
    "Press <span class='key'>E</span> for:<br> " +
    "<span class='iat-category self-other'>" + block_5_left_label_top  + "</span>" +
    "<br>or<br>" +
    "<span class='iat-category maths-arts'>" + block_5_left_label_bottom + "</span>" +
  "</p></div>" +
  "<div style='position: absolute; top: 18%; right: 20%'><p>" +
    "Press <span class='key'>I</span>  for:<br>" +
    "<span class='iat-category self-other'>" + block_5_right_label_top + "</span>" +
    "<br>or<br>" +
    "<span class='iat-category maths-arts'>" + block_5_right_label_bottom  + "</span>" +
  "</p></div>" +
  "<div class='iat-instructions' style='position: relative; top: 42%'> "+
    "<p class='instructions'>" +
    "See above, the four categories now appear together in a new configuration. " +
    "Remember, each item belongs to only one group." +
    "</p>" +
    "<p class='instructions'>" +
      "Use the <span class='key'>E</span> and <span class='key'>I</span> keys " +
      "to categorize items into the four groups left and right, and correct error " +
      "by hitting the other key." +
    "</p>" +
  "</div> " +
  "<br />" +
  "<p class = 'continue-instructions'>Press <span class='key'>space bar</span> when you are ready to start.</p>",
  choices: [32]
};

var iat_instructions_block_5_test = {
  type: 'html-keyboard-response',
  stimulus:
  "<div style='position: absolute; top: 18%; left: 20%'><p>" +
    "Press <span class='key'>E</span> for:<br> " +
    "<span class='iat-category self-other'>" + block_5_left_label_top  + "</span>" +
    "<br>or<br>" +
    "<span class='iat-category maths-arts'>" + block_5_left_label_bottom + "</span>" +
  "</p></div>" +
  "<div style='position: absolute; top: 18%; right: 20%'><p>" +
    "Press <span class='key'>I</span>  for:<br>" +
    "<span class='iat-category self-other'>" + block_5_right_label_top + "</span>" +
    "<br>or<br>" +
    "<span class='iat-category maths-arts'>" + block_5_right_label_bottom  + "</span>" +
  "</p></div>" +
  "<div class='iat-instructions' style='position: relative; top: 42%'> "+
    "<p class='instructions'>" +
    "Sort the same four categories again. Remember to go as fast as you can while " +
    "making as few mistakes as possible." +
    "</p>" +
    "<p class='instructions'>" +
    "The <span class='maths-arts'>green</span> and <span class='self-other'>black</span> labels " +
    "and items may help to identify the appropriate category. " +
    "Use the <span class='key'>E</span> and <span class='key'>I</span> keys to categorize " +
    "items into the four groups left and right, and correct errors by hitting the other key." +
    "</p>" +
  "</div> " +
  "<br />" +
  "<p class = 'continue-instructions'>Press <span class='key'>space bar</span> when you are ready to start.</p>",
  choices: [32]
};

// iat - stimuli ------------------------------------------------------------------------

var iat_block_1_stim = [
  {category: "self-other", stimulus: "I",          stim_key_association: self_side},
  {category: "self-other", stimulus: "me",         stim_key_association: self_side},
  {category: "self-other", stimulus: "my",         stim_key_association: self_side},
  {category: "self-other", stimulus: "mine",       stim_key_association: self_side},
  {category: "self-other", stimulus: "they",       stim_key_association: other_side},
  {category: "self-other", stimulus: "theirs",     stim_key_association: other_side},
  {category: "self-other", stimulus: "them",       stim_key_association: other_side},
  {category: "self-other", stimulus: "themselves", stim_key_association: other_side}
]

var iat_block_2_stim = [
  {category: "maths-arts", stimulus: "calculus",   stim_key_association: maths_side_1st},
  {category: "maths-arts", stimulus: "equation",   stim_key_association: maths_side_1st},
  {category: "maths-arts", stimulus: "geometry",   stim_key_association: maths_side_1st},
  {category: "maths-arts", stimulus: "statistics", stim_key_association: maths_side_1st},
  {category: "maths-arts", stimulus: "poetry",     stim_key_association: arts_side_1st},
  {category: "maths-arts", stimulus: "literature", stim_key_association: arts_side_1st},
  {category: "maths-arts", stimulus: "theater",    stim_key_association: arts_side_1st},
  {category: "maths-arts", stimulus: "symphony",   stim_key_association: arts_side_1st}
]

var iat_block_3_stim = [
  {category: "self-other", stimulus: "I",          stim_key_association: self_side},
  {category: "self-other", stimulus: "me",         stim_key_association: self_side},
  {category: "self-other", stimulus: "my",         stim_key_association: self_side},
  {category: "self-other", stimulus: "mine",       stim_key_association: self_side},
  {category: "self-other", stimulus: "they",       stim_key_association: other_side},
  {category: "self-other", stimulus: "theirs",     stim_key_association: other_side},
  {category: "self-other", stimulus: "them",       stim_key_association: other_side},
  {category: "self-other", stimulus: "themselves", stim_key_association: other_side},
  {category: "maths-arts", stimulus: "calculus",   stim_key_association: maths_side_1st},
  {category: "maths-arts", stimulus: "equation",   stim_key_association: maths_side_1st},
  {category: "maths-arts", stimulus: "geometry",   stim_key_association: maths_side_1st},
  {category: "maths-arts", stimulus: "statistics", stim_key_association: maths_side_1st},
  {category: "maths-arts", stimulus: "poetry",     stim_key_association: arts_side_1st},
  {category: "maths-arts", stimulus: "literature", stim_key_association: arts_side_1st},
  {category: "maths-arts", stimulus: "theater",    stim_key_association: arts_side_1st},
  {category: "maths-arts", stimulus: "symphony",   stim_key_association: arts_side_1st}
]

var iat_block_4_stim = [
  {category: "maths-arts", stimulus: "calculus",   stim_key_association: maths_side_2nd},
  {category: "maths-arts", stimulus: "equation",   stim_key_association: maths_side_2nd},
  {category: "maths-arts", stimulus: "geometry",   stim_key_association: maths_side_2nd},
  {category: "maths-arts", stimulus: "statistics", stim_key_association: maths_side_2nd},
  {category: "maths-arts", stimulus: "poetry",     stim_key_association: arts_side_2nd},
  {category: "maths-arts", stimulus: "literature", stim_key_association: arts_side_2nd},
  {category: "maths-arts", stimulus: "theater",    stim_key_association: arts_side_2nd},
  {category: "maths-arts", stimulus: "symphony",   stim_key_association: arts_side_2nd}
]

var iat_block_5_stim = [
  {category: "self-other", stimulus: "I",          stim_key_association: self_side},
  {category: "self-other", stimulus: "me",         stim_key_association: self_side},
  {category: "self-other", stimulus: "my",         stim_key_association: self_side},
  {category: "self-other", stimulus: "mine",       stim_key_association: self_side},
  {category: "self-other", stimulus: "they",       stim_key_association: other_side},
  {category: "self-other", stimulus: "theirs",     stim_key_association: other_side},
  {category: "self-other", stimulus: "them",       stim_key_association: other_side},
  {category: "self-other", stimulus: "themselves", stim_key_association: other_side},
  {category: "maths-arts", stimulus: "calculus",   stim_key_association: maths_side_2nd},
  {category: "maths-arts", stimulus: "equation",   stim_key_association: maths_side_2nd},
  {category: "maths-arts", stimulus: "geometry",   stim_key_association: maths_side_2nd},
  {category: "maths-arts", stimulus: "statistics", stim_key_association: maths_side_2nd},
  {category: "maths-arts", stimulus: "poetry",     stim_key_association: arts_side_2nd},
  {category: "maths-arts", stimulus: "literature", stim_key_association: arts_side_2nd},
  {category: "maths-arts", stimulus: "theater",    stim_key_association: arts_side_2nd},
  {category: "maths-arts", stimulus: "symphony",   stim_key_association: arts_side_2nd}
]


// iat - block 1 ------------------------------------------------------------------------
var iat_block_1_1 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      category: jsPsych.timelineVariable('category'),
      label_category: ['self-other'],
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_label:  [block_1_left_label],
      right_category_label: [block_1_right_label],
      response_ends_trial: true,
      data: {
        iat_type: 'practice',
        iat_block: 1
      }
    },
    save_iat_trial
  ],
  timeline_variables: iat_block_1_stim,
  randomize_order: true,
  repetitions:2,
}

var iat_block_1_2 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      category: jsPsych.timelineVariable('category'),
      label_category: ['self-other'],
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_label:  [block_1_left_label],
      right_category_label: [block_1_right_label],
      response_ends_trial: true,
      data: {
        iat_type: 'practice',
        iat_block: 1
      }
    },
    save_iat_trial
  ],
  timeline_variables: iat_block_1_stim,
  randomize_order: true,
  sample: {
    size: 4,
    type: "without-replacement"
  }
}

// iat - block 2 ------------------------------------------------------------------------
var iat_block_2_1 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      category: jsPsych.timelineVariable('category'),
      label_category: ['maths-arts'],
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_label:  [block_2_left_label],
      right_category_label: [block_2_right_label],
      response_ends_trial: true,
      data: {
        iat_type: 'practice',
        iat_block: 2
         }
    },
    save_iat_trial
  ],
  timeline_variables: iat_block_2_stim,
  randomize_order: true,
  repetitions: 2,
}

var iat_block_2_2 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      category: jsPsych.timelineVariable('category'),
      label_category: ['maths-arts'],
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_label:  [block_2_left_label],
      right_category_label: [block_2_right_label],
      response_ends_trial: true,
      data: {
        iat_type: 'practice',
        iat_block: 2
         }
    },
    save_iat_trial
  ],
  timeline_variables: iat_block_2_stim,
  randomize_order: true,
  sample: {
    size: 4,
    type: "without-replacement"
  }
}

// iat - block 3 (training) -------------------------------------------------------------
var iat_block_3_training_1 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      category: jsPsych.timelineVariable('category'),
      label_category: ['self-other', 'maths-arts'],
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key:  'E',
      left_category_label:  [block_3_left_label_top, block_3_left_label_bottom],
      right_category_label: [block_3_right_label_top, block_3_right_label_bottom],
      response_ends_trial: true,
      data: {
        iat_type: 'practice',
        iat_block: 3
         }
    },
    save_iat_trial
  ],
  timeline_variables: iat_block_3_stim,
  randomize_order: true
}

var iat_block_3_training_2 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      category: jsPsych.timelineVariable('category'),
      label_category: ['self-other', 'maths-arts'],
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key:  'E',
      left_category_label:  [block_3_left_label_top, block_3_left_label_bottom],
      right_category_label: [block_3_right_label_top, block_3_right_label_bottom],
      response_ends_trial: true,
      data: {
        iat_type: 'practice',
        iat_block: 3
         }
    },
    save_iat_trial
  ],
  timeline_variables: iat_block_3_stim,
  randomize_order: true,
  sample: {
    size: 4,
    type: "without-replacement"
  }
}

// iat - block 3 (test) -----------------------------------------------------------------
var iat_block_3_test_1 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      category: jsPsych.timelineVariable('category'),
      label_category: ['self-other', 'maths-arts'],
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_label:  [block_3_left_label_top, block_3_left_label_bottom],
      right_category_label: [block_3_right_label_top, block_3_right_label_bottom],
      response_ends_trial: true,
      data: {
        iat_type: 'test',
        iat_block: 3
         }
    },
    save_iat_trial
  ],
  timeline_variables: iat_block_3_stim,
  repetitions: 4,
  randomize_order: true
}

var iat_block_3_test_2 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      category: jsPsych.timelineVariable('category'),
      label_category: ['self-other', 'maths-arts'],
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_label:  [block_3_left_label_top, block_3_left_label_bottom],
      right_category_label: [block_3_right_label_top, block_3_right_label_bottom],
      response_ends_trial: true,
      data: {
        iat_type: 'test',
        iat_block: 3
         }
    },
    save_iat_trial
  ],
  timeline_variables: iat_block_3_stim,
  sample: {
    size: 10,
    type: "without-replacement"
  },
  randomize_order: true
}

// iat - block 4 ------------------------------------------------------------------------
var iat_block_4_1 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      category: jsPsych.timelineVariable('category'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      label_category: ['maths-arts'],
      html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_label:  [block_4_left_label],
      right_category_label: [block_4_right_label],
      response_ends_trial: true,
      data: {
        iat_type: 'practice',
        iat_block: 4
         }
    },
    save_iat_trial
  ],
  timeline_variables: iat_block_4_stim,
  repetitions: 2,
  randomize_order: true
}

var iat_block_4_2 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      category: jsPsych.timelineVariable('category'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      label_category: ['maths-arts'],
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_label:  [block_4_left_label],
      right_category_label: [block_4_right_label],
      response_ends_trial: true,
      data: {
        iat_type: 'practice',
        iat_block: 4
         }
    },
    save_iat_trial
  ],
  timeline_variables: iat_block_4_stim,
  sample: {
    size: 4,
    type: "without-replacement"
  },
  randomize_order: true
}
// iat - block 5 (training) -------------------------------------------------------------
var iat_block_5_training_1 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      category: jsPsych.timelineVariable('category'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      label_category: ['self-other', 'maths-arts'],
      html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_label:  [block_5_left_label_top, block_5_left_label_bottom],
      right_category_label: [block_5_right_label_top, block_5_right_label_bottom],
      response_ends_trial: true,
      data: {
        iat_type: 'practice',
        iat_block: 5
         }
    },
    save_iat_trial
  ],
  timeline_variables: iat_block_5_stim,
  randomize_order: true
}

var iat_block_5_training_2 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      category: jsPsych.timelineVariable('category'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      label_category: ['self-other', 'maths-arts'],
      html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_label:  [block_5_left_label_top, block_5_left_label_bottom],
      right_category_label: [block_5_right_label_top, block_5_right_label_bottom],
      response_ends_trial: true,
      data: {
        iat_type: 'practice',
        iat_block: 5
         }
    },
    save_iat_trial
  ],
  timeline_variables: iat_block_5_stim,
  sample: {
    size: 4,
    type: "without-replacement"
  },
  randomize_order: true
}

// iat - block 5 (test) -----------------------------------------------------------------
var iat_block_5_test_1 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      category: jsPsych.timelineVariable('category'),
      label_category: ['self-other', 'maths-arts'],
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_label:  [block_5_left_label_top, block_5_left_label_bottom],
      right_category_label: [block_5_right_label_top, block_5_right_label_bottom],
      response_ends_trial: true,
      data: {
        iat_type: 'test',
        iat_block: 5
         }
    },
    save_iat_trial
  ],
  repetitions: 4,
  timeline_variables: iat_block_5_stim,
  randomize_order: true
}

var iat_block_5_test_2 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      category: jsPsych.timelineVariable('category'),
      label_category: ['self-other', 'maths-arts'],
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_label:  [block_5_left_label_top, block_5_left_label_bottom],
      right_category_label: [block_5_right_label_top, block_5_right_label_bottom],
      response_ends_trial: true,
      data: {
        iat_type: 'test',
        iat_block: 5
         }
    },
    save_iat_trial
  ],
  timeline_variables: iat_block_5_stim,
  sample: {
    size: 10,
    type: "without-replacement"
  },
  randomize_order: true
}

// IAT task -----------------------------------------------------------------------------
// Pushing every IAT block to build the task.
// timeline.push(iat_instructions_1, iat_instructions_2, iat_instructions_3)

timeline.push(
  iat_instructions_1,
  iat_instructions_block_1, iat_block_1_1, iat_block_1_2,
  iat_instructions_block_2, iat_block_2_1, iat_block_2_2,
  iat_instructions_block_3, iat_block_3_training_1, iat_block_3_training_2,
  iat_instructions_block_3_test, iat_block_3_test_1, iat_block_3_test_1,
  iat_instructions_block_4, iat_block_4_1, iat_block_4_2,
  iat_instructions_block_5, iat_block_5_training_1, iat_block_5_training_2,
  iat_instructions_block_5_test, iat_block_5_test_1, iat_block_5_test_2
  );

// end fullscreen -----------------------------------------------------------------------

var fullscreen_trial_exit = {
  type: 'fullscreen',
  fullscreen_mode: false
}

timeline.push(fullscreen_trial_exit);

// Launch experiment --------------------------------------------------------------------
// preloading ---------------------------------------------------------------------------
// Preloading. For some reason, it appears auto-preloading fails, so using it manually.
// In principle, it should have ended when participants starts VAAST procedure (which)
// contains most of the image that have to be pre-loaded.
var loading_gif               = ["media/loading.gif"]
var vaast_instructions_images = ["media/vaast-background.png", "media/keyboard-vaastt.png", "media/arts_exemple.bmp", "media/maths_exemple.bmp"];
var vaast_stim_filename       = vaast_stim.map(a => a.stimulus);
var vaast_bg_filename         = background;

jsPsych.pluginAPI.preloadImages(loading_gif);
jsPsych.pluginAPI.preloadImages(vaast_instructions_images);
jsPsych.pluginAPI.preloadImages(vaast_stim_filename);
jsPsych.pluginAPI.preloadImages(vaast_bg_filename);

// timeline initiaization ---------------------------------------------------------------
jsPsych.init({
  timeline: timeline
},
on_interaction_data_update = saving_browser_events());
