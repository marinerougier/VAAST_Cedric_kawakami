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
  {stimulus: 'stimuli/arts_01.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_02.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_03.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_04.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_05.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_06.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_07.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_08.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_09.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_10.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_11.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_12.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_13.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_14.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_15.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_16.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_17.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_18.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_19.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_20.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_21.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_22.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_23.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/arts_24.bmp',  category: "arts",  movement: arts_movement},
  {stimulus: 'stimuli/maths_01.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_02.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_03.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_04.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_05.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_06.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_07.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_08.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_09.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_10.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_11.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_12.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_13.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_14.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_15.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_16.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_17.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_18.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_19.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_20.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_21.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_22.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_23.bmp', category: "maths", movement: maths_movement},
  {stimulus: 'stimuli/maths_24.bmp', category: "maths", movement: maths_movement}
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
  var id = jsPsych.data.getDataByTimelineNode("0.0-1.0").values()[0].responses.slice(7, -2);
  return(id)
}

// Saving blocks ------------------------------------------------------------------------
// Every function here send the data to keen.io. Because data sent is different according
// to trial type, there are differents function definition.

// init ---------------------------------------------------------------------------------
var saving_id = function(){
  var id = get_id();

  KeenAsync.ready(function(){
    var client = new KeenAsync({
      projectId: stream_projectID,
      writeKey: stream_writeKey,
    });
    if(data_stream) {
      client.recordEvent('session_id', {
        session_id: id,
        vaast_approach_training: vaast_approach_training,
        iat_self_side: iat_self,
        iat_maths_1_side: iat_maths_1,
      });
    }
  });
}

// vaast trial --------------------------------------------------------------------------
var saving_vaast_trial = function(){
  var id = get_id();
  KeenAsync.ready(function(){
    var client = new KeenAsync({
      projectId: stream_projectID,
      writeKey: stream_writeKey
    });
    if(data_stream) {
      client.recordEvent('vaast_trial', {
        session_id: id,
        vaast_approach_training: vaast_approach_training,
        iat_self_side: iat_self,
        iat_maths_1_side: iat_maths_1,
        trial_data: jsPsych.data.get().last(3).json()
      });
    }
  });
}

// iat trial ----------------------------------------------------------------------------
var saving_iat_trial = function(){
  var id = get_id();
  KeenAsync.ready(function(){
    var client = new KeenAsync({
      projectId: stream_projectID,
      writeKey: stream_writeKey
    });
    if(data_stream) {
      client.recordEvent('iat_trial', {
        session_id: id,
        vaast_approach_training: vaast_approach_training,
        iat_self_side: iat_self,
        iat_maths_1_side: iat_maths_1,
        trial_data: jsPsych.data.get().last().json()
      });
    }
  });
}

var saving_browser_events = function() {
  var id = get_id();
  KeenAsync.ready(function(){
    var client = new KeenAsync({
        projectId: stream_projectID,
        writeKey: stream_writeKey
      });
      if(data_stream) {
        client.recordEvent('session_info', {
          session_id: id,
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

if(data_stream) {
  var keen_ping = {
    type: 'keen-ping',
    loader_image: 'media/loading.gif',
    stream_name: 'connection_test',
    write_key: stream_writeKey,
    project_id: stream_projectID
  }

  timeline.push(keen_ping)
}

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
    " using your keyboard.</p>" +
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
    "<p class='instructions'>In this task, you will have to respond using your " +
    "keyboard. For every trial, once the picture appeared, you will " +
    "have to press the quickest as possible either on the \"approach\" key or the " +
    "\"avoidance\" key (see below).</p>" +
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
  vaast_block_instructions(2),
  vaast_test_block,
  vaast_block_instructions(3),
  vaast_test_block,
  vaast_block_instructions(4),
  vaast_test_block,
  vaast_block_instructions(5)
 );

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


// IAT initial instructions -------------------------------------------------------------
// IAT instructions ---------------------------------------------------------------------

// var iat_instructions_1 = {
//   type: "html-keyboard-response",
//   stimulus: "<h1 class ='custom-title'> Part 2 </h1>" +
//             "<p class='instructions'>In this part, you will be asked to sort words" +
//             " into groups as fast as you can using the keyboard.</p>" +
//             "<p>&nbsp;</p>" +
//             "<p class = 'continue-instructions'>Press <span class='key'>space</span>" +
//             " to continue.</p>",
//   choices: [32]
// };

// var iat_instructions_2 = {
//   type: "html-keyboard-response",
//   stimulus: "<h1 class ='custom-title'> Part 2 </h1>" +
//       "<p class='instructions'>To complete the task, you will have to use the " +
//       "<span class='key'>E</span> and <span class='key'>I</span> computer " +
//       "keys to categorize items into groups as fast as you can. These are the " +
//       "four groups:</p>" +
//       "<div class ='instructions'>" +
//       "<ul>" +
//       "<li><span class='iat-category'>SELF:</span> I, me, my, mine </li>" +
//       "<li><span class='iat-category'>OTHER:</span> they, theirs, them, themselves </li>" +
//       "<li><span class='iat-category'>ARTS:</span> poetry, literature, theater, symphony</li>" +
//       "<li><span class='iat-category'>MATHS:</span> calculus, equation, geometry, statistics </li>" +
//       "</ul>" +
//       "</div>" +
//       "<p class='instructions'>There are seven parts. The instructions change for " +
//       "each part so pay attention." +
//       "<p>&nbsp;</p>" +
//       "<p class = 'continue-instructions'>Press <span class='key'>space</span> to continue.</p>",
//   choices: [32]
// };

// BLOCK 1 ------------------------------------------------------------------------------
// BLOCK 1 - Instructions ---------------------------------------------------------------

var iat_instructions_block_1 = {
  type: 'html-keyboard-response',
  stimulus: "" +
            "<div style='position: absolute; top: 18%; left: 20%'> <p>Press " +
              "<span class='key'>E</span> for:<br><span class='iat-category'>" +
              block_1_left_label  +
              "</span></p>" +
            "</div>" +
            "<div style='position: absolute; top: 18%; right: 20%'><p>Press " +
              "<span class='key'>I</span> for:<br><span class='iat-category'>" +
              block_1_right_label +
              "</span></p>" +
            "</div>" +
            "<div class='iat-instructions' style='position: relative; top: 42%, width:80%;'> " +
              "<h3 class='iat-progress'>Part 1 / 7</h3>" +
              "<p>" +
                "Put a left finger on the <span class='key'>E</span> key for items that " +
                "belong to the <span class='iat-category'>" + block_1_left_label  +
                "</span> category. " +
              "</p>" +
              "<p>" +
                "Put a left finger on the <span class='key'>I</span> key for items that " +
                "belong to the <span class='iat-category'>" + block_1_right_label  +
                "</span> category. " +
              "</p>" +
              "<p>" +
                "If you make a mistake, a red cross will appear. Press the correct" +
                " key to continue." +
              "</p>" +
              "<p>" +
               "<span class='iat-important'>Go as fast as you can</span> while being" +
               " accurate." +
              "</p>" +
            "</div> " +
            "<br><br>" +
            "<p class = 'continue-instructions'>Press <span class='key'>space bar</span> when you are ready to start.</p>",
  choices: [32]
};

// BLOCK 1 - Trials ---------------------------------------------------------------------
// BLOCK 1 - Trials - stimuli -----------------------------------------------------------

var iat_block_1_stim = [
  {stimulus: "I",          stim_key_association: self_side},
  {stimulus: "me",         stim_key_association: self_side},
  {stimulus: "my",         stim_key_association: self_side},
  {stimulus: "mine",       stim_key_association: self_side},
  {stimulus: "they",       stim_key_association: other_side},
  {stimulus: "theirs",     stim_key_association: other_side},
  {stimulus: "them",       stim_key_association: other_side},
  {stimulus: "themselves", stim_key_association: other_side}
]

// BLOCK 1 - Trials - procedure ---------------------------------------------------------

var iat_block_1 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
      bottom_instructions: '<p>If you press the wrong key, a red cross will appear. Press the other key to continue.</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key:  'E',
      right_category_key: 'I',
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
  repetitions:3,
}

// BLOCK 2 ------------------------------------------------------------------------------
// BLOCK 2 - Instructions ---------------------------------------------------------------

var iat_instructions_block_2 = {
  type: 'html-keyboard-response',
  stimulus: "" +
            "<div style='position: absolute; top: 18%; left: 20%'> <p>Press " +
              "<span class='key'>E</span> for:<br><span class='iat-category'>" +
              block_2_left_label  +
              "</span></p>" +
            "</div>" +
            "<div style='position: absolute; top: 18%; right: 20%'><p>Press " +
              "<span class='key'>I</span> for:<br><span class='iat-category'>" +
              block_2_right_label +
              "</span></p>" +
            "</div>" +
            "<div class='instructions' style='position: relative; top: 42%, width:80%;'> " +
              "<h3 class='iat-progress'>Part 1 / 7</h3>" +
              "<p>" +
                "Put a left finger on the <span class='key'>E</span> key for items that " +
                "belong to the <span class='iat-category'>" + block_2_left_label  +
                "</span> category. " +
              "</p>" +
              "<p>" +
                "Put a left finger on the <span class='key'>I</span> key for items that " +
                "belong to the <span class='iat-category'>" + block_2_right_label  +
                "</span> category. " +
              "</p>" +
              "<p>" +
                "If you make a mistake, a red &times; will appear. Press the correct" +
                " key to continue." +
              "</p>" +
              "<p>" +
               "<span class='iat-important'>Go as fast as you can</span> while being" +
               " accurate." +
              "</p>" +
            "</div> " +
            "<br><br>" +
            "<p class = 'continue-instructions'>Press <span class='key'>space bar</span> when you are ready to start.</p>",
  choices: [32]
};

// BLOCK 2 - Trials ---------------------------------------------------------------------
// BLOCK 2 - Trials - stimuli -----------------------------------------------------------

var iat_block_2_stim = [
  {stimulus: "calculus",   stim_key_association: maths_side_1st},
  {stimulus: "equation",   stim_key_association: maths_side_1st},
  {stimulus: "geometry",   stim_key_association: maths_side_1st},
  {stimulus: "statistics", stim_key_association: maths_side_1st},
  {stimulus: "poetry",     stim_key_association: arts_side_1st},
  {stimulus: "literature", stim_key_association: arts_side_1st},
  {stimulus: "theater",    stim_key_association: arts_side_1st},
  {stimulus: "symphony",   stim_key_association: arts_side_1st}
]

// BLOCK 2 - Trials - procedure ---------------------------------------------------------

var iat_block_2 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">&times;</span>',
      bottom_instructions: '<p>If you press the wrong key, a red &times; will appear. Press the other key to continue</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key:  'E',
      right_category_key: 'I',
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
repetitions: 3,}

// BLOCK 3 ------------------------------------------------------------------------------
// BLOCK 3 - Instructions (practice + test) ---------------------------------------------

var iat_instructions_block_3 = {
  type: 'html-keyboard-response',
  stimulus: "" +

  "<div style='position: absolute; top: 18%; left: 20%'>" +
    "Press <span class='key'>E</span> for:<br> " +
    "<span class='iat-category'>" + block_3_left_label_top  + "</span>" +
    "<br>or<br>" +
    "<span class='iat-category'>" + block_3_left_label_bottom + "</span>" +
  "</div>" +
  "<div style='position: absolute; top: 18%; right: 20%'>" +
    "Press <span class='key'>I</span>  for:<br>" +
    "<span class='iat-category'>" + block_3_right_label_top + "</span>" +
    "<br>or<br>" +
    "<span class='iat-category'>" + block_3_right_label_bottom  + "</span>" +
  "</div>" +
  "<div class='instructions' style='position: relative; top: 42%'> "+
    "<h3 class='iat-progress'>Part 3 / 7</h3>" +
    "<p>" +
      "Put a left finger on the <span class='key'>E</span> key for " +
      "<span class='iat-category'>"  + block_3_left_label_top  + "</span>" +
      " and for " +
      "<span class='iat-category'>"  + block_3_left_label_bottom  + "</span>." +
    "</p>" +
    "<p>" +
    "Put a right finger on the <span class='key'>I</span> key for " +
    "<span class='iat-category'>" + block_3_right_label_top  + "</span>" +
    " and for " +
    "<span class='iat-category'>" + block_3_right_label_bottom + "</span>." +
    "</p>" +
    "<p>" +
      "Each item belongs to one category." +
    "</p>" +
    "<br><br>" +
    "If you make a mistake, a red X will appear. Press the correct key to continue. <br> " +
    "<span class='iat-important'>Go as fast as you can</span> while being accurate.<br><br>" +
  "</div> " +
  "<br />" +
  "<p class = 'continue-instructions'>Press <span class='key'>space bar</span> when you are ready to start.</p>",
  choices: [32]
};

var iat_instructions_block_3_test = {
  type: 'html-keyboard-response',
  stimulus: "" +

  "<div style='position: absolute; top: 18%; left: 20%'>Press <span class='key'>E</span> for:<br> " +
  "<strong>" + block_3_left_label_top  + "</strong><br>or<br><strong>" + block_3_left_label_bottom   + "</strong></div>" +
  "<div style='position: absolute; top: 18%; right: 20%'>Press <span class='key'>I</span>  for:<br>" +
  "<strong>" + block_3_right_label_top + "</strong><br>or<br><strong>" + block_3_right_label_bottom  + "</strong></div>" +

  "<div class='instructions' style='position: relative; top: 42%'> "+
    "<h3 class='iat-progress'>Part 3 / 7</h3>" +
    "Put a left finger on the <span class='key'>E</span> key for "  + block_3_left_label_top  + " and for "  + block_3_left_label_bottom  + ".<br />" +
    "Put a right finger on the <span class='key'>I</span> key for " + block_3_right_label_top  + " and for " + block_3_right_label_bottom + ".<br />" +
    "Each item belongs to one category." +
    "<br><br>" +
    "If you make a mistake, a red X will appear. Press the correct key to continue. <br> " +
    "<span class='iat-important'>Go as fast as you can</span> while being accurate.<br><br>" +
  "</div> " +
  "<br />" +
  "<p class = 'continue-instructions'>Press <span class='key'>space bar</span> when you are ready to start.</p>",
  choices: [32]
};

// BLOCK 3 - Trials (practice + test) ---------------------------------------------------
// BLOCK 3 - Trials (practice + test) - stimuli -----------------------------------------

var iat_block_3_stim = [
  {stimulus: "I",          stim_key_association: self_side},
  {stimulus: "me",         stim_key_association: self_side},
  {stimulus: "my",         stim_key_association: self_side},
  {stimulus: "mine",       stim_key_association: self_side},
  {stimulus: "they",       stim_key_association: other_side},
  {stimulus: "theirs",     stim_key_association: other_side},
  {stimulus: "them",       stim_key_association: other_side},
  {stimulus: "themselves", stim_key_association: other_side},
  {stimulus: "calculus",   stim_key_association: maths_side_1st},
  {stimulus: "equation",   stim_key_association: maths_side_1st},
  {stimulus: "geometry",   stim_key_association: maths_side_1st},
  {stimulus: "statistics", stim_key_association: maths_side_1st},
  {stimulus: "poetry",     stim_key_association: arts_side_1st},
  {stimulus: "literature", stim_key_association: arts_side_1st},
  {stimulus: "theater",    stim_key_association: arts_side_1st},
  {stimulus: "symphony",   stim_key_association: arts_side_1st}
]

var iat_block_3 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key:  'E',
      right_category_key: 'I',
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
  type: 'without-replacement',
  size: 20,
  randomize_order: true}

var iat_block_3_test = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key:  'E',
      right_category_key: 'I',
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
randomize_order: true}

// BLOCK 4 - Trials ---------------------------------------------------------------------
// BLOCK 4 - Trials - stimuli -----------------------------------------------------------

var iat_block_4_stim = [
  {stimulus: "calculus",   stim_key_association: maths_side_2nd},
  {stimulus: "equation",   stim_key_association: maths_side_2nd},
  {stimulus: "geometry",   stim_key_association: maths_side_2nd},
  {stimulus: "statistics", stim_key_association: maths_side_2nd},
  {stimulus: "poetry",     stim_key_association: arts_side_2nd},
  {stimulus: "literature", stim_key_association: arts_side_2nd},
  {stimulus: "theater",    stim_key_association: arts_side_2nd},
  {stimulus: "symphony",   stim_key_association: arts_side_2nd}
]

// BLOCK 4 - Trials - procedure ---------------------------------------------------------

var iat_block_4 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key:  'E',
      right_category_key: 'I',
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
randomize_order: true}

// BLOCK 5 - Trials (practice + test) ---------------------------------------------------
// BLOCK 5 - Trials (practice + test) - stimuli -----------------------------------------

var iat_block_5_stim = [
  {stimulus: "I",          stim_key_association: self_side},
  {stimulus: "me",         stim_key_association: self_side},
  {stimulus: "my",         stim_key_association: self_side},
  {stimulus: "mine",       stim_key_association: self_side},
  {stimulus: "they",       stim_key_association: other_side},
  {stimulus: "theirs",     stim_key_association: other_side},
  {stimulus: "them",       stim_key_association: other_side},
  {stimulus: "themselves", stim_key_association: other_side},
  {stimulus: "calculus",   stim_key_association: maths_side_2nd},
  {stimulus: "equation",   stim_key_association: maths_side_2nd},
  {stimulus: "geometry",   stim_key_association: maths_side_2nd},
  {stimulus: "statistics", stim_key_association: maths_side_2nd},
  {stimulus: "poetry",     stim_key_association: arts_side_2nd},
  {stimulus: "literature", stim_key_association: arts_side_2nd},
  {stimulus: "theater",    stim_key_association: arts_side_2nd},
  {stimulus: "symphony",   stim_key_association: arts_side_2nd}
]

// BLOCK 5 - Trials (practice + test) - procedure ---------------------------------------

var iat_block_5 = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key:  'E',
      right_category_key: 'I',
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
randomize_order: true}

var iat_block_5_test = {
  timeline: [
    {
      type: 'iat-html',
      stimulus: jsPsych.timelineVariable('stimulus'),
      stim_key_association: jsPsych.timelineVariable('stim_key_association'),
      html_when_wrong: '<span style="color: red; font-size: 80px">X</span>',
      bottom_instructions: '<p>If you press the wrong key, a red X will appear. Press the other key to continue</p>',
      force_correct_key_press: true,
      display_feedback: true,
      left_category_key:  'E',
      right_category_key: 'I',
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
randomize_order: true}

// IAT task -----------------------------------------------------------------------------
// Pushing every IAT block to build the task.
// timeline.push(iat_instructions_1, iat_instructions_2, iat_instructions_3)
timeline.push(
  iat_instructions_block_1,      iat_block_1,
  iat_instructions_block_2,      iat_block_2,
  iat_instructions_block_3,      iat_block_3,
  iat_instructions_block_3_test, iat_block_3_test,
  );

// end fullscreen -----------------------------------------------------------------------

var fullscreen_trial_exit = {
  type: 'fullscreen',
  fullscreen_mode: false
}

timeline.push(fullscreen_trial_exit);

// Launch experiment --------------------------------------------------------------------

jsPsych.init({
  timeline: timeline,
  on_finish: function() {
  }
});

