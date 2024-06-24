// Background script can be empty if no background tasks are needed



// document.getElementById('save-session').addEventListener('click', () => {
//     chrome.tabs.query({currentWindow: true}, (tabs) => {
//       const tabUrls = tabs.map(tab => tab.url);
//       chrome.storage.local.set({tabSession: tabUrls}, () => {
//         alert('Session saved!');
//       });
//     });
//   });
  
//   document.getElementById('restore-session').addEventListener('click', () => {
//     chrome.storage.local.get('tabSession', (data) => {
//       if (data.tabSession) {
//         data.tabSession.forEach(url => {
//           chrome.tabs.create({url: url});
//         });
//       }
//     });
//   });
  
//   document.getElementById('search').addEventListener('input', (e) => {
//     const query = e.target.value.toLowerCase();
//     chrome.tabs.query({currentWindow: true}, (tabs) => {
//       const filteredTabs = tabs.filter(tab => tab.title.toLowerCase().includes(query));
//       const tabList = document.getElementById('tab-list');
//       tabList.innerHTML = '';
//       filteredTabs.forEach(tab => {
//         const li = document.createElement('li');
//         li.textContent = tab.title;
//         tabList.appendChild(li);
//       });
//     });
//   });
  