function realtime() {
    const d = new Date();
    let text = d.toLocaleTimeString();
    document.getElementById("time").innerHTML = text;
    setInterval(() => {
        const d = new Date();
        let text = d.toLocaleTimeString();
        document.getElementById("time").innerHTML = text;
    }, 1)
}

realtime();