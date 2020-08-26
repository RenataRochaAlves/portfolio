var projects = ['mememoravel', 'uniu', 'samplaces', 'petshop'];

for (let i = 0; i < projects.length; i++) {
    var mainFrame = document.querySelector('#' + projects[i] + ' .frames .main-frame');

    var firstFrame = document.querySelector('#' + projects[i] + ' .frames .sub-frames div:nth-child(1)');
    var secondFrame = document.querySelector('#' + projects[i] + ' .frames .sub-frames div:nth-child(2)');
    var thirdFrame = document.querySelector('#' + projects[i] + ' .frames .sub-frames div:nth-child(3)');

    firstFrame.onmouseover = function(evt) {
        var mainFrame = document.querySelector('#' + projects[i] + ' .frames .main-frame');
        mainFrame.innerHTML = document.querySelector('#' + projects[i] + ' .frames .sub-frames div:nth-child(1)').innerHTML;
    }
    secondFrame.onmouseover = function(evt) {
        var mainFrame = document.querySelector('#' + projects[i] + ' .frames .main-frame');
        mainFrame.innerHTML = document.querySelector('#' + projects[i] + ' .frames .sub-frames div:nth-child(2)').innerHTML;
    }
    thirdFrame.onmouseover = function(evt) {
        var mainFrame = document.querySelector('#' + projects[i] + ' .frames .main-frame');
        mainFrame.innerHTML = document.querySelector('#' + projects[i] + ' .frames .sub-frames div:nth-child(3)').innerHTML;
    }
    
}
