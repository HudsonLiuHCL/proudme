import React, { useState } from 'react';
import '../../css/journal.css';

import Button from '@material-ui/core/Button';
import Modal from '@mui/material/Modal';
import { Slider } from '@mui/material';
import { CSVLink } from 'react-csv';

import { IoIosArrowUp, IoIosArrowDown } from 'react-icons/io';

const JournalScreen = () => {

  const [goalOpen, setGoalOpen] = useState(false);
  const [reflectOpen, setReflectOpen] = useState(false);
  const [selectedGoalReflectionIndex, setSelectedGoalReflectionIndex] = useState(-1);

  const [rightScreenMode, setRightScreenMode] = useState('');
  const [reflectionPage, setReflectionPage] = useState('Default');

  const [goalArray, setGoalArray] = useState([]);
  const [goalCount, setGoalCount] = useState(0);
  const [inputGoalValue, setInputGoalValue] = useState(false);

  const [dataList, setDataList] = useState([]);

  const handleEnter = (event) => {
    if (event.key === "Enter") {
      setInputGoalValue(false);
***REMOVED***
***REMOVED***

  const handleBlur = (event) => {
    setInputGoalValue(false);
    console.log(event.target.value);
***REMOVED***

  const handleOpenGoalModal = () => {
    setGoalOpen(true);
***REMOVED***;

  const handleCloseGoalModal = () => {
    setGoalOpen(false);
***REMOVED***;

  const handleReflectionClick = (index) => {
    setSelectedGoalReflectionIndex(index);
    setReflectOpen(true);
***REMOVED***;

  const handleCloseReflectModal = () => {
    setSelectedGoalReflectionIndex(-1);
    setReflectOpen(false);
    setReflectionPage('');
***REMOVED***;

  const handleGoalCountChange = () => {
    setGoalCount(goalCount + 1);
***REMOVED***

  const CSV = () => {
    const headers = [
      { label: "Goal Data ID", key: "goalDataId"},
      { label: "Goal Details", key: "goalDetails" },
      { label: "Goal Quantity", key: "goalQuantity" },
      { label: "Goal Reflection", key: "goalReflection"},
      { label: "Goal Reflection Value", key: "goalReflectionValue" }, 
      { label: "Type of Goal", key: "goalType" },
      { label: "Start Date", key: "startDate" },
      { label: "End Date", key: "endDate" }
    ];

    return (
      <div>
        <CSVLink data={dataList} headers={headers} filename='goaldata.csv'>Download Goal Data</CSVLink>
      </div>
    )
***REMOVED***

  function updateGoalValue(id, newQuantity) {
    setGoalArray(prevGoals =>
      prevGoals.map(goal => {
        if (goal.id === id) {
          return { ...goal, goalValue: newQuantity };
    ***REMOVED***
        return goal;
  ***REMOVED***)
    );
    setDataList(prevGoals =>
      prevGoals.map(goal => {
        if (goal.goalDataId === id) {
          console.log(dataList);
          return { ...goal, "goalQuantity": newQuantity };
    ***REMOVED***
        return goal;
  ***REMOVED***)
    );
***REMOVED***

  function updateGoal(id, newDescription) {
    setGoalArray(prevGoals =>
      prevGoals.map(goal => {
        if (goal.id === id) {
          return { ...goal, divInfo1: newDescription };
    ***REMOVED***
        return goal;
  ***REMOVED***)
    );
    setDataList(prevGoals =>
      prevGoals.map(goal => {
        if (goal.goalDataId === id) {
          console.log(dataList);
          return { ...goal, "goal": newDescription };
    ***REMOVED***
        return goal;
  ***REMOVED***)
    );
***REMOVED***

  function addEatingGoal() {

    var dateToday = new Date(),
      month = dateToday.getMonth(),
      day = dateToday.getDate(),
      year = dateToday.getFullYear(),
      date = (month + 1) + '/' + day  + '/' +  year;
    
    var defaultEndDate = new Date();
    defaultEndDate.setDate(defaultEndDate.getDate() + 14);
    console.log(defaultEndDate);

    if (defaultEndDate.getMonth != dateToday.getMonth) {
      var defaultEndDay = (defaultEndDate.getMonth() + 2) + '/' + defaultEndDate.getDate()  + '/' +  year;
***REMOVED***
    else {
      var defaultEndDay = (defaultEndDate.getMonth() + 1) + '/' + defaultEndDate.getDate()  + '/' +  year;
***REMOVED***

    const newGoal = {
      id: goalCount,
      goalValue: 5,
      divInfo1: "Eat 5 or more servings of fruits and/or vegetables",
      divInfo2: "Reach target increments for servings of fruit (1-5).",
      reflection: "",
      reflectionValue: 0,
      startDate: date,
      endDate: defaultEndDay
***REMOVED***

    setGoalArray([...goalArray, newGoal]);
    handleGoalCountChange();
    setRightScreenMode("Goal Selected Mode");

    const newData = [...dataList, { "goalDataId": newGoal.id, 
    "goalDetails": newGoal.divInfo1, "goalQuantity": newGoal.goalValue, 
    "goalReflection": newGoal.reflection, "goalReflectionValue": newGoal.reflectionValue,
    "goalType": "Eating", "startDate": newGoal.startDate, "endDate": newGoal.endDate }];
    setDataList(newData);
***REMOVED***

  function addActivityGoal() {
    const newGoal = {
      id: goalCount,
      goalValue: 60,
      divInfo1: "Get at least 60 minutes of physical activity per day",
      divInfo2: "Do exercises like running or playing sports for at least an hour a day.",
      reflection: "",
      reflectionValue: 0
***REMOVED***

    setGoalArray([...goalArray, newGoal]);
    handleGoalCountChange();
    setRightScreenMode("Goal Selected Mode");

    const newData = [...dataList, { "goalDataId": newGoal.id, 
    "goalDetails": newGoal.divInfo1, "goalQuantity": newGoal.goalValue, 
    "goalReflection": newGoal.reflection, "goalReflectionValue": newGoal.reflectionValue,
    "goalType": "Activity" }];
    setDataList(newData);
***REMOVED***

  function addScreentimeGoal() {
    const newGoal = {
      id: goalCount,
      goalValue: 2,
      divInfo1: "Limit screentime to 2 hours a day",
      divInfo2: "Use devices like phones, laptops, and TV's less.",
      reflection: "",
      reflectionValue: 0
***REMOVED***

    setGoalArray([...goalArray, newGoal]);
    handleGoalCountChange();
    setRightScreenMode("Goal Selected Mode");

    const newData = [...dataList, { "goalDataId": newGoal.id, 
    "goalDetails": newGoal.divInfo1, "goalQuantity": newGoal.goalValue, 
    "goalReflection": newGoal.reflection, "goalReflectionValue": newGoal.reflectionValue,
    "goalType": "Screentime" }];
    setDataList(newData);
***REMOVED***

  function addSleepGoal() {
    const newGoal = {
      id: goalCount,
      goalValue: 9,
      divInfo1: "Sleep at least 9 hours a night",
      divInfo2: "Get anywhere from 9-11 hours of sleep a night to feel the best.",
      reflection: "",
      reflectionValue: 0
***REMOVED***

    setGoalArray([...goalArray, newGoal]);
    handleGoalCountChange();
    setRightScreenMode("Goal Selected Mode");

    const newData = [...dataList, { "goalDataId": newGoal.id, 
    "goalDetails": newGoal.divInfo1, "goalQuantity": newGoal.goalValue,
    "goalReflection": newGoal.reflection, "goalReflectionValue": newGoal.reflectionValue, 
    "goalType": "Sleep" }];
    setDataList(newData);
***REMOVED***

  function updateGoalReflection(id, newReflection) {
    setGoalArray(prevGoals =>
      prevGoals.map(goal => {
        if (goal.id === id) {
          return { ...goal, reflection: newReflection };
    ***REMOVED***
        return goal;
  ***REMOVED***)
    );
    setDataList(prevGoals =>
      prevGoals.map(goal => {
        if (goal.goalDataId === id) {
          console.log(dataList);
          return { ...goal, "goalReflection": newReflection };
    ***REMOVED***
        return goal;
  ***REMOVED***)
    );
***REMOVED***

  function updateGoalReflectionValue(id, newReflectionValue) {
    setGoalArray(prevGoals =>
      prevGoals.map(goal => {
        if (goal.id === id) {
          return { ...goal, reflectionValue: +newReflectionValue };
    ***REMOVED***
        return goal;
  ***REMOVED***)
    );
    setDataList(prevGoals =>
      prevGoals.map(goal => {
        if (goal.goalDataId === id) {
          console.log(dataList);
          return { ...goal, "goalReflectionValue": +newReflectionValue };
    ***REMOVED***
        return goal;
  ***REMOVED***)
    );
***REMOVED***

  return (
    <div className="journal">
      <h1 className="title">My Journal</h1>
      <div className="journalWrapper">
        <img className="journalCover" src={require('../../components/images/journal/journal_cover.png')}
          alt="Journal cover screen wrapper" />
        <img onClick={() => setRightScreenMode("Progress Mode")} className="achievements-tab" src={require('../../components/images/journal/achievements_tab.png')}
          alt="Achievements bookmark tab" />
        <img onClick={() => setRightScreenMode("")} className="goals-tab" src={require('../../components/images/journal/goals_tab.png')}
          alt="Goals bookmark tab" />
        <img className="gallery-tab" src={require('../../components/images/journal/gallery_tab.png')}
          alt="Gallery bookmark tab" onClick={() => console.log(dataList)}/>
        <div className="leftPageWrapper">
          {rightScreenMode === "Goal Selected Mode" ?
            <div className="goal-box">
              <h4>You've selected a goal. Do your best! If you still want to work on more goals right now, click the yellow "Goals" tab on the right page.</h4>
            </div>
            : rightScreenMode === "Progress Mode" ?
              <div className="goal-box">
                <h1>Progress Checking Mode</h1>
                {goalCount === 0 ?
                  <h4>You're not currently working on any goals. Add some from the goal page!</h4>
                  : goalCount === 1 ?
                    <h4>You're currently working on 1 goal.</h4>
                    :
                    <h4>You're currently working on {goalCount} goals.</h4>
            ***REMOVED***
              </div>
              :
              <div className="goal-box">
                <h1 className="journal-title">Behaviors</h1>
                <div className="recommendation-container">
                  <div className="text-container">
                    <div className="eating-goal-image">
                      <img src={require('../../components/images/journal/apple.png')} alt="Apple for servings goal" />
                    </div>

                    <div className="selection-container">
                      <h3 className="eating-goal-header">Eat 5 servings of fruits/vegetables</h3>
                      <p>Eat fruits and vegetables for a more balanced diet.</p>
                    </div>
                  </div>

                  <div className="button-container">
                    <Button variant="contained"
                      startIcon={<img src={require("../../components/images/journal/brain.png")}
                        alt="Brain for learn more button" />}
                      style={{
                        backgroundColor: '#9B8EEB', textTransform: 'none', fontWeight: 'bold', fontSize: '14px',
                        borderRadius: '25px', color: 'white', width: '150px', marginTop: '5%'
                  ***REMOVED***}
                      onClick={() => console.log('l')}
                    >
                      Learn More
                    </Button>
                    <Button style={{
                      backgroundColor: '#78C648', textTransform: 'none', fontWeight: 'bold', fontSize: '14px',
                      borderRadius: '25px', color: 'white', width: '175px', marginTop: '5%'
                ***REMOVED***}
                      onClick={() => { addEatingGoal() }}
                    >
                      Add to My Goals
                    </Button>
                  </div>
                </div>

                <div className="recommendation-container">
                  <div className="text-container">
                    <div className="eating-goal-image">
                      <img className="activity" src={require('../../components/images/journal/activity_goals.png')} alt="Activity goals icon on activity goals page" />
                    </div>

                    <div className="selection-container">
                      <h3 className="eating-goal-header">Get an hour of physical activity a day</h3>
                      <p>Exercise to keep your body fit and healthy.</p>
                    </div>
                  </div>

                  <div className="button-container">
                    <Button variant="contained"
                      startIcon={<img src={require("../../components/images/journal/brain.png")}
                        alt="Brain for learn more button" />}
                      style={{
                        backgroundColor: '#9B8EEB', textTransform: 'none', fontWeight: 'bold', fontSize: '14px',
                        borderRadius: '25px', color: 'white', width: '150px', marginTop: '5%'
                  ***REMOVED***}
                      onClick={() => { setRightScreenMode('Other Goal Mode') }}
                    >
                      Learn More
                    </Button>
                    <Button style={{
                      backgroundColor: '#78C648', textTransform: 'none', fontWeight: 'bold', fontSize: '14px',
                      borderRadius: '25px', color: 'white', width: '175px', marginTop: '5%'
                ***REMOVED***}
                      onClick={() => { addActivityGoal() }}
                    >
                      Add to My Goals
                    </Button>
                  </div>
                </div>

                <div className="recommendation-container">
                  <div className="text-container">
                    <div className="eating-goal-image">
                      <img src={require('../../components/images/journal/tablet_icon.png')} alt="Apple for servings goal" />
                    </div>

                    <div className="selection-container">
                      <h3 className="eating-goal-header">Limit screen time to 2 hours a day</h3>
                      <p>Keep screen time low and go outside to help your mind and eyes.</p>
                    </div>
                  </div>

                  <div className="button-container">
                    <Button variant="contained"
                      startIcon={<img src={require("../../components/images/journal/brain.png")}
                        alt="Brain for learn more button" />}
                      style={{
                        backgroundColor: '#9B8EEB', textTransform: 'none', fontWeight: 'bold', fontSize: '14px',
                        borderRadius: '25px', color: 'white', width: '150px', marginTop: '5%'
                  ***REMOVED***}
                      onClick={() => { setRightScreenMode('Other Goal Mode') }}
                    >
                      Learn More
                    </Button>
                    <Button style={{
                      backgroundColor: '#78C648', textTransform: 'none', fontWeight: 'bold', fontSize: '14px',
                      borderRadius: '25px', color: 'white', width: '175px', marginTop: '5%'
                ***REMOVED***}
                      onClick={() => { addScreentimeGoal() }}
                    >
                      Add to My Goals
                    </Button>
                  </div>
                </div>

                <div className="recommendation-container">
                  <div className="text-container">
                    <div className="eating-goal-image">
                      <img src={require('../../components/images/journal/pillow_icon.png')} alt="Crossed out candy icon for avoid sugary food" />
                    </div>

                    <div className="selection-container">
                      <h3 className="eating-goal-header">Get 9 hours of sleep a day</h3>
                      <p>Get good amounts of sleep to improve focus and lower health risks.</p>
                    </div>
                  </div>

                  <div className="button-container">
                    <Button variant="contained"
                      startIcon={<img src={require("../../components/images/journal/brain.png")}
                        alt="Brain for learn more button" />}
                      style={{
                        backgroundColor: '#9B8EEB', textTransform: 'none', fontWeight: 'bold', fontSize: '14px',
                        borderRadius: '25px', color: 'white', width: '150px', marginTop: '5%'
                  ***REMOVED***}
                      onClick={() => { setRightScreenMode('Other Goal Mode') }}
                    >
                      Learn More
                    </Button>
                    <Button style={{
                      backgroundColor: '#78C648', textTransform: 'none', fontWeight: 'bold', fontSize: '14px',
                      borderRadius: '25px', color: 'white', width: '175px', marginTop: '5%'
                ***REMOVED***}
                      onClick={() => { addSleepGoal() }}
                    >
                      Add to My Goals
                    </Button>
                  </div>
                </div>
              </div>
      ***REMOVED***

          <img className="leftpage1" src={require('../../components/images/journal/right_page.png')}
            alt="First left-side page" />
          <img className="leftpage2" src={require('../../components/images/journal/right_page2.png')}
            alt="Second left-side page" />
          <img className="leftpage3" src={require('../../components/images/journal/right_page.png')}
            alt="Third left-side page" />
        </div>
        <img className="middle-line" src={require('../../components/images/journal/middle_line.png')} alt="Middle journal line" />
        <div className="rightPageWrapper">
          <img className="bookmark" src={require('../../components/images/journal/bookmark.png')} alt="Yellow bookmark icon" />
          <div className="goal-box">
            <h1 className="journal-title">My Goals</h1>
            {goalCount === 0 ?
              <div className="goal-text">You don't have any goals added yet. Add some recommended behaviors from the left page to start!</div>
              :
              <div>
                {goalArray.map((goal) => (
                  <div className="current-goal" key={goal.id}>
                    <div className="goal-container">
                      <div className="goal-description" onClick={() => handleOpenGoalModal()}>
                        <h3 className="goal-text">{goal.divInfo1}</h3>
                        <h6 className="goal-text">{goal.divInfo2}</h6>
                      </div>

                      <div className="selection-container">
                        <IoIosArrowUp id="upIcon" 
                          onClick={() => {updateGoalValue(goal.id, +goal.goalValue + 1)}} />
                        <h2 onClick={() => setInputGoalValue(true)} 
                        className="number-text">
                          {inputGoalValue === true ?
                          <input type="number" name="goalValue" value={goal.goalValue} onBlur={handleBlur}
                          onChange={(e) => updateGoalValue(goal.id, e.target.value)}
                          onKeyDown={handleEnter}
                          />
                          : 
                          <div>{goal.goalValue}</div>
                      ***REMOVED***
                        </h2>
                        <IoIosArrowDown id="downIcon" 
                          onClick={() => {if (goal.goalValue > 0) updateGoalValue(goal.id, +goal.goalValue - 1)
                          else updateGoalValue(goal.id, goal.goalValue)}} />
                      </div>
                    </div>

                    <div className="reflect-wrapper" key={goal.id}>
                      <img className="reflect-image"
                        src={require('../../components/images/journal/reflect.png')} alt="Temporary reflection icon"
                        onClick={() => handleReflectionClick(goal.id)} />
                      <p style={{ fontWeight: 'bold' }}>Reflect</p>
                      {selectedGoalReflectionIndex !== -1 && (
                        <Modal
                          aria-labelledby="reflect-modal"
                          aria-describedby="modal-to-reflect-on-goal"
                          open={reflectOpen}
                          onClose={handleCloseReflectModal}
                          key={goal.id}
                        >
                          {reflectionPage === 'Text' ?
                            <div className="modal">
                              <div className="inside-modal">
                                <h2>Reflect on Your Goal</h2>
                                <h4>Feel free to type some insights into your goal here; it will be recorded for your own tracking.</h4>
                                <input className="modal-input" type="text" name="reflection" placeholder="Reflection thoughts"
                                  value={goalArray[selectedGoalReflectionIndex].reflection} onChange={(e) => { updateGoalReflection(selectedGoalReflectionIndex, e.target.value); }} />
                              </div>

                              <div className="nav-options">
                                <Button style={{
                                  backgroundColor: '#D9D9D9', width: '45%', textTransform: 'none', fontWeight: 'bold', fontSize: '18px',
                                  borderRadius: '20px'
                            ***REMOVED***}
                                  onClick={() => { setReflectionPage(''); }}
                                >
                                  Back
                                </Button>

                                <Button style={{
                                  backgroundColor: '#ADF083', width: '45%', textTransform: 'none', fontWeight: 'bold', fontSize: '18px',
                                  borderRadius: '20px'
                            ***REMOVED***}
                                  onClick={() => { handleCloseReflectModal(); }}
                                >
                                  Reflect
                                </Button>
                              </div>
                            </div>
                            :
                            <div className="modal">
                              <div className="inside-modal">
                                <h2>Reflect on Your Goal</h2>
                                <h4>Rate progress towards your goal this week 1-10. 1 being the lowest 
                                  (no progress), 10 being the highest (surpassed goal and feel great 
                                  about it).</h4>
                                <Slider
                                  aria-label="Reflection Meter"
                                  defaultValue={1}
                                  valueLabelDisplay="auto"
                                  step={1}
                                  marks
                                  min={1}
                                  max={10}
                                  value={goalArray[selectedGoalReflectionIndex].reflectionValue}
                                  onChange={(e) => { updateGoalReflectionValue(selectedGoalReflectionIndex, e.target.value); }}
                                />
                              </div>

                              <div className="nav-options">
                                <Button style={{
                                  backgroundColor: '#D9D9D9', width: '45%', textTransform: 'none', fontWeight: 'bold', fontSize: '18px',
                                  borderRadius: '20px'
                            ***REMOVED***}
                                  onClick={() => { handleCloseReflectModal(); }}
                                >
                                  Cancel
                                </Button>

                                <Button style={{
                                  backgroundColor: '#ADF083', width: '45%', textTransform: 'none', fontWeight: 'bold', fontSize: '18px',
                                  borderRadius: '20px'
                            ***REMOVED***}
                                  onClick={() => { setReflectionPage('Text') }}
                                >
                                  Next
                                </Button>
                              </div>
                            </div>
                      ***REMOVED***
                        </Modal>
                      )}
                      <Modal
                        aria-labelledby="goal-modal"
                        aria-describedby="modal-to-create-new-goal"
                        open={goalOpen}
                        onClose={handleCloseGoalModal}
                      >
                        <div className="modal">
                          <h2>Edit Your Goal Progress</h2>
                          <h4>Goal Name</h4>
                          <input className="modal-input" type="text" name="goal" onChange={(e) => updateGoal(goal.id, e.target.value)} value={goal.divInfo1} />
                          <h4>How much have you progressed towards your goal this week?</h4>
                          <input className="modal-input" type="number" name="goal" onChange={(e) => updateGoalValue(goal.id, e.target.value)} value={goal.goalValue} />
                          <Button style={{
                            backgroundColor: '#ADF083', width: '80%', textTransform: 'none', fontWeight: 'bold', fontSize: '18px',
                            borderRadius: '20px'
                      ***REMOVED***}
                            onClick={() => { handleCloseGoalModal() }}
                          >
                            Log Progress
                          </Button>
                        </div>
                      </Modal>
                    </div>
                  </div>
                ))}
              </div>
        ***REMOVED***

            <CSV />

          </div>
          <img className="rightpage1" src={require('../../components/images/journal/left_page.png')}
            alt="First right-side page" />
          <img className="rightpage2" src={require('../../components/images/journal/left_page2.png')}
            alt="Second right-side page" />
          <img className="rightpage3" src={require('../../components/images/journal/left_page3.png')}
            alt="Third right-side page" />
        </div>
      </div>
    </div>
  );
};

export default JournalScreen;

// percentage of progress from survey questions (multiple modals)
// incorporate AI for reflections on virtual coach
// incorporate progress button instead of update progress at the bottom
// check during morning, day