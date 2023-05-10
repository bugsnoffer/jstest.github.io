
<!-- saved from url=(0066)https://abp.brightpattern.com/agentdesktop/AgentDesktopSdkTest.jsp -->
<html><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8"><meta name="color-scheme" content="light dark"></head><body><div class="line-gutter-backdrop"></div><form autocomplete="off"><label class="line-wrap-control">Line wrap<input type="checkbox" aria-label="Line wrap"></label></form><table><tbody><tr><td class="line-number" value="1"></td><td class="line-content"><span class="html-doctype">&lt;!DOCTYPE html&gt;</span>
</td></tr><tr><td class="line-number" value="2"></td><td class="line-content"><span class="html-tag">&lt;html <span class="html-attribute-name">lang</span>="<span class="html-attribute-value">en</span>"&gt;</span>
</td></tr><tr><td class="line-number" value="3"></td><td class="line-content">    <span class="html-tag">&lt;head&gt;</span>
</td></tr><tr><td class="line-number" value="4"></td><td class="line-content">        <span class="html-tag">&lt;meta <span class="html-attribute-name">charset</span>="<span class="html-attribute-value">UTF-8</span>"&gt;</span>
</td></tr><tr><td class="line-number" value="5"></td><td class="line-content">        <span class="html-tag">&lt;title&gt;</span>AgentDesktop SDK Test<span class="html-tag">&lt;/title&gt;</span>
</td></tr><tr><td class="line-number" value="6"></td><td class="line-content">
</td></tr><tr><td class="line-number" value="7"></td><td class="line-content">        <span class="html-tag">&lt;script <span class="html-attribute-name">type</span>="<span class="html-attribute-value">text/javascript</span>" <span class="html-attribute-name">src</span>="<a class="html-attribute-value html-resource-link" target="_blank" href="https://abp.brightpattern.com/agentdesktop/libs/servicepattern-sdk-v1.js" rel="noreferrer noopener">libs/servicepattern-sdk-v1.js</a>"&gt;</span><span class="html-tag">&lt;/script&gt;</span>
</td></tr><tr><td class="line-number" value="8"></td><td class="line-content">    <span class="html-tag">&lt;/head&gt;</span>
</td></tr><tr><td class="line-number" value="9"></td><td class="line-content">    <span class="html-tag">&lt;body&gt;</span>
</td></tr><tr><td class="line-number" value="10"></td><td class="line-content">        <span class="html-tag">&lt;iframe <span class="html-attribute-name">id</span>="<span class="html-attribute-value">repeater</span>" <span class="html-attribute-name">style</span>="<span class="html-attribute-value">position:absolute; right: 8px; width: 30%; height: 90%;</span>"&gt;</span><span class="html-tag">&lt;/iframe&gt;</span>
</td></tr><tr><td class="line-number" value="11"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.getState(log)</span>"&gt;</span>Get State<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="12"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="13"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="14"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.setStatus('READY')</span>"&gt;</span>Go To Ready<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="15"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="16"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="17"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.logout()</span>"&gt;</span>Logout<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="18"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="19"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="20"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.muteCallRecordings()</span>"&gt;</span>Mute Call Recordings<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="21"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.unmuteCallRecordings()</span>"&gt;</span>Unmute Call Recordings<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="22"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.muteScreenRecordings()</span>"&gt;</span>Mute Screen Recordings<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="23"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.unmuteScreenRecordings()</span>"&gt;</span>Unmute Screen Recordings<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="24"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="25"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="26"></td><td class="line-content">        <span class="html-tag">&lt;input <span class="html-attribute-name">id</span>="<span class="html-attribute-value">service</span>" <span class="html-attribute-name">type</span>="<span class="html-attribute-value">text</span>" <span class="html-attribute-name">placeholder</span>="<span class="html-attribute-value">Service name</span>"/&gt;</span>
</td></tr><tr><td class="line-number" value="27"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.selectService(document.getElementById('service').value)</span>"&gt;</span>Change Service by Name<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="28"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="29"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="30"></td><td class="line-content">        <span class="html-tag">&lt;input <span class="html-attribute-name">id</span>="<span class="html-attribute-value">number</span>" <span class="html-attribute-name">type</span>="<span class="html-attribute-value">text</span>" <span class="html-attribute-name">placeholder</span>="<span class="html-attribute-value">Dial number</span>"/&gt;</span>
</td></tr><tr><td class="line-number" value="31"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.dialNumber(document.getElementById('number').value)</span>"&gt;</span>Dial<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="32"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="33"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="34"></td><td class="line-content">        <span class="html-tag">&lt;input <span class="html-attribute-name">id</span>="<span class="html-attribute-value">item</span>" <span class="html-attribute-name">type</span>="<span class="html-attribute-value">text</span>" <span class="html-attribute-name">placeholder</span>="<span class="html-attribute-value">Interaction Id, see Logs</span>"/&gt;</span>
</td></tr><tr><td class="line-number" value="35"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="36"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="37"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.terminateInteraction(document.getElementById('item').value)</span>"&gt;</span>Terminate<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="38"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.completeInteraction(document.getElementById('item').value)</span>"&gt;</span>Complete<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="39"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="40"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="41"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.getCallRecordingStatus(document.getElementById('item').value)</span>"&gt;</span>Get Call Recording Status<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="42"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.startCallRecording(document.getElementById('item').value)</span>"&gt;</span>Start Call Recording<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="43"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.stopCallRecording(document.getElementById('item').value)</span>"&gt;</span>Stop Call Recording<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="44"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.muteCallRecording(document.getElementById('item').value)</span>"&gt;</span>Mute Call Recording<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="45"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.unmuteCallRecording(document.getElementById('item').value)</span>"&gt;</span>Unmute Call Recording<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="46"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="47"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="48"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.getScreenRecordingStatus(document.getElementById('item').value)</span>"&gt;</span>Get Screen Recording Status<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="49"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.muteScreenRecording(document.getElementById('item').value)</span>"&gt;</span>Mute Screen Recording<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="50"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.unmuteScreenRecording(document.getElementById('item').value)</span>"&gt;</span>Unmute Screen Recording<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="51"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.stopScreenRecording(document.getElementById('item').value)</span>"&gt;</span>Stop Screen Recording<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="52"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="53"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="54"></td><td class="line-content">
</td></tr><tr><td class="line-number" value="55"></td><td class="line-content">        <span class="html-tag">&lt;input <span class="html-attribute-name">id</span>="<span class="html-attribute-value">transfer_number</span>" <span class="html-attribute-name">type</span>="<span class="html-attribute-value">text</span>" <span class="html-attribute-name">placeholder</span>="<span class="html-attribute-value">Number</span>"/&gt;</span>
</td></tr><tr><td class="line-number" value="56"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.singleStepTransfer(document.getElementById('transfer_number').value)</span>"&gt;</span>Single Step Transfer<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="57"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.singleStepConference(document.getElementById('transfer_number').value)</span>"&gt;</span>Single Step Conference<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="58"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="59"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="60"></td><td class="line-content">        <span class="html-tag">&lt;input <span class="html-attribute-name">id</span>="<span class="html-attribute-value">dispositionItem</span>" <span class="html-attribute-name">type</span>="<span class="html-attribute-value">text</span>" <span class="html-attribute-name">placeholder</span>="<span class="html-attribute-value">Item_id</span>"/&gt;</span>
</td></tr><tr><td class="line-number" value="61"></td><td class="line-content">        <span class="html-tag">&lt;input <span class="html-attribute-name">id</span>="<span class="html-attribute-value">dispositionCode</span>" <span class="html-attribute-name">type</span>="<span class="html-attribute-value">text</span>" <span class="html-attribute-name">placeholder</span>="<span class="html-attribute-value">Disposition code</span>"/&gt;</span>
</td></tr><tr><td class="line-number" value="62"></td><td class="line-content">
</td></tr><tr><td class="line-number" value="63"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.setDisposition(document.getElementById('dispositionItem').value, document.getElementById('dispositionCode').value)</span>"&gt;</span>Set Disposition By Code<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="64"></td><td class="line-content">
</td></tr><tr><td class="line-number" value="65"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.setDispositionByName(document.getElementById('dispositionItem').value, document.getElementById('dispositionCode').value)</span>"&gt;</span>Set Disposition By Name<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="66"></td><td class="line-content">
</td></tr><tr><td class="line-number" value="67"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="68"></td><td class="line-content">        <span class="html-tag">&lt;br&gt;</span>
</td></tr><tr><td class="line-number" value="69"></td><td class="line-content">        <span class="html-tag">&lt;input <span class="html-attribute-name">id</span>="<span class="html-attribute-value">variableName</span>" <span class="html-attribute-name">type</span>="<span class="html-attribute-value">text</span>" <span class="html-attribute-name">placeholder</span>="<span class="html-attribute-value">Variable name</span>"/&gt;</span>
</td></tr><tr><td class="line-number" value="70"></td><td class="line-content">        <span class="html-tag">&lt;input <span class="html-attribute-name">id</span>="<span class="html-attribute-value">variableValue</span>" <span class="html-attribute-name">type</span>="<span class="html-attribute-value">text</span>" <span class="html-attribute-name">placeholder</span>="<span class="html-attribute-value">Variable value</span>"/&gt;</span>
</td></tr><tr><td class="line-number" value="71"></td><td class="line-content">        <span class="html-tag">&lt;button <span class="html-attribute-name">onclick</span>="<span class="html-attribute-value">bpspat.api.postVariable(document.getElementById('dispositionItem').value, document.getElementById('variableName').value, document.getElementById('variableValue').value)</span>"&gt;</span>Set variable<span class="html-tag">&lt;/button&gt;</span>
</td></tr><tr><td class="line-number" value="72"></td><td class="line-content">
</td></tr><tr><td class="line-number" value="73"></td><td class="line-content">        <span class="html-tag">&lt;div <span class="html-attribute-name">id</span>="<span class="html-attribute-value">log</span>"&gt;</span>Logs...<span class="html-tag">&lt;/div&gt;</span>
</td></tr><tr><td class="line-number" value="74"></td><td class="line-content">
</td></tr><tr><td class="line-number" value="75"></td><td class="line-content">        <span class="html-tag">&lt;script <span class="html-attribute-name">type</span>="<span class="html-attribute-value">text/javascript</span>"&gt;</span>
</td></tr><tr><td class="line-number" value="76"></td><td class="line-content">            //initiate script with origin of AgentDesktop embedded on the page
</td></tr><tr><td class="line-number" value="77"></td><td class="line-content">            window.bpspat.api.init(window.location.href.substring(0, window.location.href.indexOf("/agentdesktop/AgentDesktopSdkTest.jsp")));//remove suffix, pass origin
</td></tr><tr><td class="line-number" value="78"></td><td class="line-content">
</td></tr><tr><td class="line-number" value="79"></td><td class="line-content">            document.getElementById("repeater").src = window.location.href.replace("AgentDesktopSdkTest", "UniversalRepeater");
</td></tr><tr><td class="line-number" value="80"></td><td class="line-content">
</td></tr><tr><td class="line-number" value="81"></td><td class="line-content">            function log(data) {
</td></tr><tr><td class="line-number" value="82"></td><td class="line-content">                let div = document.createElement("div");
</td></tr><tr><td class="line-number" value="83"></td><td class="line-content">                div.innerHTML = JSON.stringify(data);
</td></tr><tr><td class="line-number" value="84"></td><td class="line-content">                document.getElementById("log").appendChild(div);
</td></tr><tr><td class="line-number" value="85"></td><td class="line-content">            }
</td></tr><tr><td class="line-number" value="86"></td><td class="line-content">
</td></tr><tr><td class="line-number" value="87"></td><td class="line-content">            window.bpspat.api.addAgentLoginHandler(log);
</td></tr><tr><td class="line-number" value="88"></td><td class="line-content">            window.bpspat.api.addStatusChangeHandler(log);
</td></tr><tr><td class="line-number" value="89"></td><td class="line-content">            window.bpspat.api.addInteractionRenderedHandler(log);
</td></tr><tr><td class="line-number" value="90"></td><td class="line-content">            window.bpspat.api.addInteractionCompletedHandler(log);
</td></tr><tr><td class="line-number" value="91"></td><td class="line-content">            window.bpspat.api.addInboundCallOfferedHandler(log);
</td></tr><tr><td class="line-number" value="92"></td><td class="line-content">            window.bpspat.api.addInboundCallAnsweredHandler(log);
</td></tr><tr><td class="line-number" value="93"></td><td class="line-content">            window.bpspat.api.addOutboundCallDialingHandler(log);
</td></tr><tr><td class="line-number" value="94"></td><td class="line-content">            window.bpspat.api.addOutboundCallConnectedHandler(log);
</td></tr><tr><td class="line-number" value="95"></td><td class="line-content">            window.bpspat.api.addCallEndedHandler(log);
</td></tr><tr><td class="line-number" value="96"></td><td class="line-content">            window.bpspat.api.addCallHeldHandler(log);
</td></tr><tr><td class="line-number" value="97"></td><td class="line-content">            window.bpspat.api.addCallResumedHandler(log);
</td></tr><tr><td class="line-number" value="98"></td><td class="line-content">            window.bpspat.api.addBlindTransferHandler(log);
</td></tr><tr><td class="line-number" value="99"></td><td class="line-content">            window.bpspat.api.addConsultTransferHandler(log);
</td></tr><tr><td class="line-number" value="100"></td><td class="line-content">            window.bpspat.api.addCallRecordingStatusHandler(log);
</td></tr><tr><td class="line-number" value="101"></td><td class="line-content">            window.bpspat.api.addScreenRecordingStatusHandler(log);
</td></tr><tr><td class="line-number" value="102"></td><td class="line-content">        <span class="html-tag">&lt;/script&gt;</span>
</td></tr><tr><td class="line-number" value="103"></td><td class="line-content">    <span class="html-tag">&lt;/body&gt;</span>
</td></tr><tr><td class="line-number" value="104"></td><td class="line-content"><span class="html-tag">&lt;/html&gt;</span><span class="html-end-of-file"></span></td></tr></tbody></table></body></html>
