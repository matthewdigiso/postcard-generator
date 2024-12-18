document.addEventListener('DOMContentLoaded', function() {
    // Define state images mapping
    const stateImages = {
        al: "url('img/al@2x.jpg')",
        ak: "url('img/ak@2x.jpg')",
        az: "url('img/az@2x.jpg')",
        ar: "url('img/ar@2x.jpg')",
        ca: "url('img/ca@2x.jpg')",
        co: "url('img/co@2x.jpg')",
        ct: "url('img/ct@2x.jpg')",
        de: "url('img/de@2x.jpg')",
        dc: "url('img/dc@2x.jpg')",
        fl: "url('img/fl@2x.jpg')",
        ga: "url('img/ga@2x.jpg')",
        hi: "url('img/hi@2x.jpg')",
        id: "url('img/id@2x.jpg')",
        il: "url('img/il@2x.jpg')",
        in: "url('img/in@2x.jpg')",
        ia: "url('img/ia@2x.jpg')",
        ks: "url('img/ks@2x.jpg')",
        ky: "url('img/ky@2x.jpg')",
        la: "url('img/la@2x.jpg')",
        me: "url('img/me@2x.jpg')",
        md: "url('img/md2x.jpg')",
        ma: "url('img/ma@2x.jpg')",
        mi: "url('img/mi@2x.jpg')",
        mn: "url('img/mn@2x.jpg')",
        ms: "url('img/ms@2x.jpg')",
        mo: "url('img/mo@2x.jpg')",
        mt: "url('img/mt@2x.jpg')",
        ne: "url('img/ne@2x.jpg')",
        nv: "url('img/nv@2x.jpg')",
        nh: "url('img/nh@2x.jpg')",
        nj: "url('img/nj@2x.jpg')",
        nm: "url('img/nm@2x.jpg')",
        ny: "url('img/ny@2x.jpg')",
        nc: "url('img/nc@2x.jpg')",
        nd: "url('img/nd@2x.jpg')",
        oh: "url('img/oh@2x.jpg')",
        ok: "url('img/ok@2x.jpg')",
        or: "url('img/or@2x.jpg')",
        pa: "url('img/pa@2x.jpg')",
        ri: "url('img/ri@2x.jpg')",
        sc: "url('img/sc@2x.jpg')",
        sd: "url('img/sd@2x.jpg')",
        tn: "url('img/tn@2x.jpg')",
        tx: "url('img/tx@2x.jpg')",
        ut: "url('img/ut@2x.jpg')",
        vt: "url('img/vt@2x.jpg')",
        va: "url('img/va@2x.jpg')",
        wa: "url('img/wa@2x.jpg')",
        wv: "url('img/wv@2x.jpg')",
        wi: "url('img/wi@2x.jpg')",
        wy: "url('img/wy@2x.jpg')"
    };

    // Elements
    const stateSelect = document.getElementById('states');
    const postcard = document.getElementById('postcard');
    const stateHeading = document.getElementById('state-heading');
    const greeting = document.getElementById('greeting');

    // Function to update postcard based on selected state
    stateSelect.addEventListener('change', function() {
        const selectedState = stateSelect.value;

        if (selectedState === 'empty-state') {
            // Show default state
            postcard.style.backgroundImage = "url('../img/empty-state@2x.jpg')";
            greeting.textContent = "To Generate a Postcard";
            stateHeading.textContent = "Choose a state";
        } else {
            // Update postcard with the selected state's image and name
            postcard.style.backgroundImage = stateImages[selectedState] || "url('../img/empty-state@2x.jpg')";
            greeting.textContent = "Greetings from";
            stateHeading.textContent = selectedState.charAt(0).toUpperCase() + selectedState.slice(1); // Capitalize first letter of state
        }
    });

    // Initialize with the default state (empty-state)
    stateSelect.value = "empty-state";
    postcard.style.backgroundImage = "url('../img/empty-state@2x.jpg')";
});
