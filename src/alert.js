// alert.js

class AlertLibrary {
    static loadCSS() {
        const cssId = 'alert-library-css';
        if (!document.getElementById(cssId)) {
            const link = document.createElement('link');
            link.id = cssId;
            link.rel = 'stylesheet';
            link.type = 'text/css';
            link.href = 'path/to/alert.css'; // Adjust the path as necessary
            link.media = 'all';
            document.head.appendChild(link);
        }
    }

    static showAlert(message, type = 'info') {
        this.loadCSS();

        const alertDiv = document.createElement('div');
        alertDiv.className = `alert alert-${type}`;
        alertDiv.textContent = message;

        document.body.appendChild(alertDiv);

        setTimeout(() => {
            alertDiv.remove();
        }, 3000);
    }

    static info(message) {
        this.showAlert(message, 'info');
    }

    static success(message) {
        this.showAlert(message, 'success');
    }

    static warning(message) {
        this.showAlert(message, 'warning');
    }

    static error(message) {
        this.showAlert(message, 'error');
    }
}

// Export the library for use in other modules
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AlertLibrary;
} else {
    window.AlertLibrary = AlertLibrary;
}
