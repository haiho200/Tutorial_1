/* Beginner lessons use the simulator's real Python worker. */
(() => {
  const el = id => document.getElementById(id);
  const lessons = [
    {title:'Print a greeting', concept:'print() displays a message. Put text inside quotation marks.', task:'Change the message so the program prints Welcome to my snack shop!', predict:'What will appear in OUTPUT when you run your code?', starter:'print("Hello, world!")\n', hint:'Keep print() and the quotation marks. Replace only the words inside them.', solution:'print("Welcome to my snack shop!")\n', expected:['Welcome to my snack shop!']},
    {title:'Store four kinds of values', concept:'A variable is a name that stores a value. A string is text, an integer is a whole number, a float is a decimal, and a Boolean is True or False.', task:'Set shop_name to Owl Snacks, stock to 12, price to 2.5, and is_open to True. Keep text in quotes and numbers without quotes.', predict:'Which value needs quotation marks? Which value needs a capital letter?', starter:'shop_name = "My shop"\nstock = 0\nprice = 0.0\nis_open = False\n\nprint(shop_name)\nprint(stock)\nprint(price)\nprint(is_open)\n', hint:'Use "Owl Snacks" for the text. True starts with a capital T.', solution:'shop_name = "Owl Snacks"\nstock = 12\nprice = 2.5\nis_open = True\n\nprint(shop_name)\nprint(stock)\nprint(price)\nprint(is_open)\n', expected:['Owl Snacks','12','2.5','True']},
    {title:'Calculate an order', concept:'Use * to multiply and - to subtract. Store a calculation in a variable to use it again.', task:'A snack costs $3. Buy 4 snacks with a $15 budget. Replace the two zeros with calculations for total and remaining.', predict:'Predict the total cost and money remaining before running.', starter:'price = 3\nquantity = 4\nbudget = 15\ntotal = 0  # Replace with a calculation\nremaining = 0  # Replace with a calculation\nprint("Total:", total)\nprint("Remaining:", remaining)\n', hint:'Multiply price by quantity. Then subtract total from budget.', solution:'price = 3\nquantity = 4\nbudget = 15\ntotal = price * quantity\nremaining = budget - total\nprint("Total:", total)\nprint("Remaining:", remaining)\n', expected:['Total: 12','Remaining: 3']},
    {title:'Check the budget', concept:'A comparison returns True or False. <= means less than or equal to; == checks whether two values are equal. A single = stores a value.', task:'Replace False with a comparison that checks whether total is at most budget. The order costs exactly the budget.', predict:'Should an order that uses exactly $15 count as within a $15 budget?', starter:'total = 15\nbudget = 15\nwithin_budget = False  # Replace with a comparison\nprint("Within budget:", within_budget)\n', hint:'Put total on the left of <= and budget on the right.', solution:'total = 15\nbudget = 15\nwithin_budget = total <= budget\nprint("Within budget:", within_budget)\n', expected:['Within budget: True']},
    {title:'Ask for a name', concept:'input() asks a question and waits for a typed answer. Its result is text. When the answer box appears below OUTPUT, type your answer and select Send answer.', task:'Replace "customer" with input("Your name: "). Run the program and enter your own name.', predict:'Where will the program pause to wait for you?', starter:'name = "customer"  # Replace with input(...)\nprint("Hello", name)\n', hint:'Keep name = and replace the quoted word with the input() call.', solution:'name = input("Your name: ")\nprint("Hello", name)\n', inputs:1, expected:r=>['Hello '+r.inputs[0]]},
    {title:'Turn input into a number', concept:'input() gives text, even when you type digits. int() converts text such as "4" into the whole number 4 so you can calculate with it.', task:'Replace 0 with int(input("How many snacks? ")). Run and enter 4. Use whole numbers in these exercises.', predict:'What should 4 snacks at $3 each cost?', starter:'price = 3\nquantity = 0  # Replace with int(input(...))\nprint("Total:", price * quantity)\n', hint:'Put input("How many snacks? ") inside int(...).', solution:'price = 3\nquantity = int(input("How many snacks? "))\nprint("Total:", price * quantity)\n', inputs:1, testInputs:['4'], expected:['Total: 12']},
    {title:'Print a friendly receipt', concept:'print() can combine text and variables separated by commas. Python inserts spaces between them.', task:'Replace the last line with one print() call that uses name and total to display: Alex your total is 12 dollars', predict:'Which parts of the receipt are fixed words, and which parts come from variables?', starter:'name = "Alex"\nprice = 3\nquantity = 4\ntotal = price * quantity\nprint("Receipt")\n', hint:'Use print(name, "your total is", total, "dollars").', solution:'name = "Alex"\nprice = 3\nquantity = 4\ntotal = price * quantity\nprint(name, "your total is", total, "dollars")\n', expected:['Alex your total is 12 dollars']},
    {title:'Build your snack shop', concept:'Combine input, variables, calculations, comparisons, and printing. Your program runs from top to bottom.', task:'Complete the starter using what you learned. Keep the output labels shown. Test with a budget of 15 and quantities 4, 5, and 6; select Check this run after each test. Use the same code for all three.', predict:'Predict total, remaining money, and True or False for each order. A negative remaining amount means the order is over budget.', starter:'name = input("Your name: ")\nquantity = int(input("How many snacks? "))\nbudget = int(input("Your budget in dollars? "))\nprice = 3\n\n# Replace these values with calculations or a comparison.\ntotal = 0\nremaining = 0\nwithin_budget = False\n\nprint("Customer:", name)\nprint("Total:", total)\nprint("Remaining:", remaining)\nprint("Within budget:", within_budget)\n', hint:'total = price * quantity\nremaining = budget - total\nwithin_budget = total <= budget', solution:'name = input("Your name: ")\nquantity = int(input("How many snacks? "))\nbudget = int(input("Your budget in dollars? "))\nprice = 3\ntotal = price * quantity\nremaining = budget - total\nwithin_budget = total <= budget\nprint("Customer:", name)\nprint("Total:", total)\nprint("Remaining:", remaining)\nprint("Within budget:", within_budget)\n', inputs:3, final:true, expected:r=>{const q=Number(r.inputs[1]), b=Number(r.inputs[2]);return ['Customer: '+r.inputs[0], 'Total: '+3*q, 'Remaining: '+(b-3*q), 'Within budget: '+(3*q<=b?'True':'False')];}}
  ];
  const questions=[
    ['Why do we put quotation marks around the greeting?', ['They tell Python that the words are text.', 'They make the message print twice.', 'Every Python instruction needs quotation marks.'],0,'Quotation marks identify text. print() displays that text.'],
    ['Which value is a Boolean?', ['"True"','2.5','True'],2,'A Boolean is True or False without quotation marks. "True" is text.'],
    ['If quantity changes from 4 to 5, with price = 3 and budget = 15, what remains?', ['3 dollars','0 dollars','5 dollars'],1,'Five snacks cost 5 × 3 = 15 dollars; 15 − 15 = 0.'],
    ['What does 18 <= 15 produce?', ['True','False','15'],1,'18 is greater than 15, so the comparison is False.'],
    ['If someone types 12 into input(), what does input() return?', ['The whole number 12','The text "12"','True'],1,'input() always returns text. Convert it when you need a number.'],
    ['Why wrap input() inside int() before calculating a total?', ['To print the answer','To make the number larger','To convert the typed text into a whole number'],2,'int() converts text containing a whole number into a number you can calculate with.'],
    ['With total = 12, which line prints the value of total?', ['print("total")','print(total)'],1,'Without quotation marks, total refers to the stored value. With quotes, it prints the word total.'],
    ['For 6 snacks at $3 with a $15 budget, what should the receipt show?', ['Total 18, remaining −3, within budget False','Total 18, remaining 3, within budget True','Total 15, remaining 0, within budget True'],0,'Six snacks cost 18 dollars. The budget is 3 dollars short, so remaining is −3 and the comparison is False.']
  ];
  const drafts=lessons.map(l=>l.starter), passed=new Set(), exercised=new Set(), answered=new Set(), cases=new Set(), quizFeedback={};
  const reflections=['','',''];
  function updateCompletion(){if(exercised.has(step)&&answered.has(step))passed.add(step);else passed.delete(step);}
  let active=false, step=0, freeCode='', run=null, caseCode=null, feedback='';
  const toggle=document.createElement('button'); toggle.id='tutorial-toggle'; toggle.textContent='Start beginner tutorial';
  const strip=document.createElement('div'); strip.className='tutorial-strip'; strip.append(toggle);
  const progressTools=document.createElement('span');progressTools.id='progress-tools';progressTools.hidden=true;
  progressTools.innerHTML='<button id="save-progress" class="quiet">Save progress</button><label class="upload quiet">Open progress<input id="open-progress" type="file" accept=".json" hidden></label>';
  strip.append(progressTools);
  const storageKey='sense-hat-beginner-progress-v1';
  let storageWorks=true;
  function progressData(){return {version:1,step,drafts:[...drafts],exercised:[...exercised],answered:[...answered],cases:[...cases],caseCode,reflections:[...reflections]};}
  function remember(){try{sessionStorage.setItem(storageKey,JSON.stringify(progressData()));storageWorks=true;}catch{storageWorks=false;}}
  function restore(data){
    const indices=a=>Array.isArray(a)&&a.every(i=>Number.isInteger(i)&&i>=0&&i<lessons.length);
    if(!data||data.version!==1||!Number.isInteger(data.step)||data.step<0||data.step>=lessons.length||!Array.isArray(data.drafts)||data.drafts.length!==lessons.length||!data.drafts.every(s=>s===null||typeof s==='string')||!indices(data.exercised)||!indices(data.answered))throw new Error('Invalid progress file');
    step=data.step;data.drafts.forEach((s,i)=>drafts[i]=s===null?lessons[i].starter:s);
    exercised.clear();answered.clear();passed.clear();cases.clear();
    data.exercised.forEach(i=>exercised.add(i));data.answered.forEach(i=>answered.add(i));
    exercised.forEach(i=>{if(answered.has(i))passed.add(i);});
    if(Array.isArray(data.cases))data.cases.filter(i=>[4,5,6].includes(i)).forEach(i=>cases.add(i));
    caseCode=typeof data.caseCode==='string'?data.caseCode:null;
    reflections.forEach((_,i)=>reflections[i]=typeof data.reflections?.[i]==='string'?data.reflections[i]:'');
    lessons.forEach((_,i)=>quizFeedback[i]=answered.has(i)?'Correct. '+questions[i][3]:'');run=null;
  }
  progressTools.querySelector('#save-progress').onclick=()=>{save();const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([JSON.stringify(progressData(),null,2)],{type:'application/json'}));a.download='python-progress.json';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);};
  progressTools.querySelector('#open-progress').onchange=async e=>{const file=e.target.files[0];if(!file||running)return;try{if(file.size>1000000)throw new Error('Too large');const data=JSON.parse(await file.text());restore(data);el('code').value=drafts[step];feedback='Progress restored. Continue where you left off.';show();document.querySelector('.simulation').scrollTop=0;}catch{feedback='Could not read that progress file. Choose a saved Python progress JSON file.';show();}e.target.value='';};
  const score=document.createElement('div');score.id='lesson-score';score.setAttribute('role','status');score.setAttribute('aria-live','polite');score.hidden=true;
  score.innerHTML='<strong>Lessons Successfully Completed: <span id="completed-lesson-numbers">None yet</span></strong><p><span id="completed-lesson-count">0 of 8 lessons</span> · Code exercise + understanding question correct</p><p class="score-note">For your submission, capture this summary before closing or reloading.</p>';
  document.querySelector('header').append(score);
  document.querySelector('.editor').prepend(strip);
  const panel=document.createElement('section');panel.id='tutorial';panel.className='panel tutorial-panel';panel.hidden=true;
  document.querySelector('.output-panel').after(panel);
  const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  function save(){if(active)drafts[step]=el('code').value;remember();}
  function show(){
    const l=lessons[step];
    el('completed-lesson-numbers').textContent=[...passed].sort((a,b)=>a-b).map(i=>i+1).join(', ')||'None yet';
    el('completed-lesson-count').textContent=passed.size+' of '+lessons.length+' lessons';
    panel.innerHTML=`<div class="bar"><strong>Beginner Python · ${step+1} / ${lessons.length}</strong><span>${passed.size} / ${lessons.length} checked</span></div><div class="lesson-body"><label for="lesson-select">Choose a lesson</label><select id="lesson-select">${lessons.map((x,i)=>`<option value="${i}" ${step===i?'selected':''}>${passed.has(i)?'✓ ':''}${i+1}. ${escape(x.title)}</option>`).join('')}</select><progress max="8" value="${passed.size}" aria-label="Lessons checked"></progress><h2>${escape(l.title)}</h2><p>${escape(l.concept)}</p><div class="lesson-task"><strong>Your turn</strong><p>${escape(l.task)}</p></div><p class="prediction"><strong>Before you run:</strong> ${escape(l.predict)}</p><details><summary>Show a hint</summary><pre>${escape(l.hint)}</pre></details><details><summary>Show a worked solution</summary><p>Try your own code first, then compare it with this example.</p><pre>${escape(l.solution)}</pre></details>${l.final?'<p class="test-cases">'+[4,5,6].map(q=>`${cases.has(q)?'✓':'○'} ${q} snacks / $15`).join(' &nbsp; ')+'</p>':''}<div class="lesson-controls"><button id="check-run" class="primary">Check this run</button><button id="reset-lesson">Reset starter</button></div><p id="lesson-feedback" role="status">${escape(feedback||'Edit the code on the left, select Run code, then check your result here.')}</p><div class="lesson-controls"><button id="lesson-prev" ${step===0?'disabled':''}>Previous</button><button id="lesson-next" ${step===lessons.length-1?'disabled':''}>Next lesson →</button></div><p class="lesson-foot">Progress and drafts last while this page stays open. Use Save .py to keep your code. Based on Python_Beginner_Tutorial, parts 1–7; advanced formatting is optional.</p>${passed.size===8?'<p class="lesson-complete">All eight lessons checked! Save your program and capture your three test results for your assignment.</p>':''}</div>`;
    const guidance=document.createElement('p');guidance.className='lesson-foot';guidance.textContent='Scroll this panel for hints, the code check, and your understanding question.';panel.querySelector('h2').before(guidance);
    const q=questions[step], quiz=document.createElement('section');quiz.className='lesson-quiz';quiz.setAttribute('aria-label','Understanding question');
    quiz.innerHTML='<h3>Show what you understand</h3><p>'+escape(q[0])+'</p><div class="quiz-choices">'+q[1].map((choice,i)=>'<button data-answer="'+i+'">'+escape(choice)+'</button>').join('')+'</div><p role="status">'+escape(quizFeedback[step]||'Choose an answer. Both the code exercise and this question count toward completion.')+'</p>';
    el('lesson-feedback').after(quiz);
    quiz.querySelectorAll('[data-answer]').forEach(b=>b.onclick=()=>{const correct=Number(b.dataset.answer)===q[2];if(correct){answered.add(step);quizFeedback[step]='Correct. '+q[3];}else{answered.delete(step);quizFeedback[step]='Not yet. Read the lesson explanation, think it through, and try again.';}updateCompletion();show();});
    if(l.final){const reflection=document.createElement('section');reflection.className='lesson-reflection';reflection.innerHTML='<h3>Explain your results</h3><p>Write a sentence for each question. These are for your instructor to review; they are not automatically marked.</p>'+['Why is the 5-snack order still within budget?','What does −3 remaining mean for the 6-snack order?','What would change if the price became $4? Give one example.'].map((prompt,i)=>'<label for="reflection-'+i+'">'+prompt+'</label><textarea id="reflection-'+i+'" rows="2">'+escape(reflections[i])+'</textarea>').join('')+'<button id="save-reflection">Save learning record</button>';quiz.after(reflection);reflections.forEach((_,i)=>el('reflection-'+i).oninput=e=>reflections[i]=e.target.value);el('save-reflection').onclick=()=>{const record='Python beginner tutorial\n'+passed.size+' of 8 lessons checked\nFinal test quantities checked with budget 15: '+[...cases].sort().join(', ')+'\n\n'+reflections.map((a,i)=>reflection.querySelector('label[for="reflection-'+i+'"]').textContent+'\n'+(a||'(Not answered)')).join('\n\n')+'\n\nCurrent code:\n'+el('code').value;const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([record],{type:'text/plain'}));a.download='python-learning-record.txt';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000);};}
    el('lesson-select').onchange=e=>move(Number(e.target.value));
    el('lesson-prev').onclick=()=>move(step-1);el('lesson-next').onclick=()=>move(step+1);
    el('reset-lesson').onclick=()=>{if(running)return;if(!confirm('Reset this lesson’s code to its starter?'))return;el('code').value=l.starter;drafts[step]=l.starter;invalidate();run=null;feedback='Starter restored. Try it again.';show();};
    el('check-run').onclick=check;
    remember();
    const foot=panel.querySelector('.lesson-controls:last-of-type + .lesson-foot');
    if(foot)foot.textContent=(storageWorks?'Progress survives refreshes in this tab. ':'Browser progress saving is unavailable. ')+'Use Save progress before closing the tab; Open progress restores it. Based on Python_Beginner_Tutorial, parts 1–7.';
    lock();
  }
  function lock(){toggle.disabled=running;if(!active)return;['lesson-select','reset-lesson','check-run','lesson-prev','lesson-next'].forEach(id=>{el(id).disabled=running||(id==='lesson-prev'&&step===0)||(id==='lesson-next'&&step===7);});}
  function move(n){if(running||n<0||n>=lessons.length)return;save();step=n;el('code').value=drafts[step];run=null;feedback='';show();document.querySelector('.simulation').scrollTop=0;}
  function invalidate(){passed.delete(step);exercised.delete(step);if(step===7){cases.clear();caseCode=null;}feedback='Code changed. Run it again to check the new version.';}
  el('code').addEventListener('input',()=>{if(!active)return;save();invalidate();show();});
  toggle.onclick=()=>{if(running)return;if(active){save();active=false;el('code').value=freeCode;}else{freeCode=el('code').value;active=true;el('code').value=drafts[step];}run=null;panel.hidden=!active;score.hidden=!active;document.body.classList.toggle('tutorial-active',active);toggle.textContent=active?'Return to playground':'Start beginner tutorial';el('examples').disabled=active;el('upload').disabled=active;if(active){show();document.querySelector('.simulation').scrollTop=0;}};
  window.addEventListener('python-run',e=>{if(active){run={code:e.detail.code,step,inputs:[],lines:[],done:false,error:false};feedback='Running. Answer any input prompts below OUTPUT.';show();}lock();});
  window.addEventListener('python-message',e=>{const m=e.detail;if(active&&run){if(m.type==='out')run.lines.push(m.text);if(m.type==='done'){run.done=true;run.error=m.error;feedback=m.error?'Python found an error. Read OUTPUT, fix the code, and run again.':'Run finished. Select Check this run to compare your output.';show();}}lock();});
  window.addEventListener('python-input',e=>{if(active&&run)run.inputs.push(e.detail.value);});
  window.addEventListener('python-stop',()=>{run=null;feedback='Stopped. Run your program to completion before checking.';if(active)show();lock();});
  function check(){
    const l=lessons[step];
    if(!run||!run.done||run.step!==step||run.code!==el('code').value){feedback='Run this version of your code to completion first.';show();return;}
    if(run.error){feedback='Fix the Python error shown in OUTPUT, then run again. The hint can help.';show();return;}
    if(run.inputs.length!==(l.inputs||0)){feedback=`Use ${l.inputs||0} input() calls for this exercise, then run again.`;show();return;}
    if(l.testInputs&&run.inputs.some((s,i)=>s.trim()!==l.testInputs[i])){feedback='For this check, run again and enter 4.';show();return;}
    if(l.final&&(!['4','5','6'].includes(run.inputs[1].trim())||run.inputs[2].trim()!=='15')){feedback='Use a quantity of 4, 5, or 6 and a budget of 15 for these three checks.';show();return;}
    const expected=typeof l.expected==='function'?l.expected(run):l.expected;
    const actual=run.lines.join('\n').trim().split('\n').map(s=>s.trimEnd());
    if(actual.length!==expected.length||expected.some((s,i)=>s!==actual[i])){feedback='Not quite. Expected output:\n'+expected.join('\n')+'\nCompare it with OUTPUT and try again. Keep the exercise’s labels and spacing.';show();return;}
    if(l.final){if(caseCode!==run.code){cases.clear();caseCode=run.code;}cases.add(Number(run.inputs[1]));if(cases.size===3)exercised.add(step);feedback=cases.size===3?'All three test outputs match. Answer the understanding question and explain your results below.':'This test output matches! Now run the same code with another quantity. '+cases.size+' of 3 checked.';}
    else{exercised.add(step);feedback='Your output matches! Answer the understanding question to complete this lesson.';}
    updateCompletion();
    show();
  }
  try{const saved=sessionStorage.getItem(storageKey);if(saved)restore(JSON.parse(saved));}catch{}
  toggle.addEventListener('click',()=>{progressTools.hidden=!active;});
  window.addEventListener('pagehide',()=>{if(active)save();});
  if(new URLSearchParams(location.search).get('playground')!=='1')toggle.click();
})();




