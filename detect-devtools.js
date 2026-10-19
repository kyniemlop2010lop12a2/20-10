(function(window) {
  window.DisableDevtool = function() {
    return { success: true };
  };
  window.DisableDevtool.isRunning = false;
  window.DisableDevtool.isSuspend = true;
  window.DisableDevtool.isDevToolOpened = function() { return false; };
})(typeof window !== 'undefined' ? window : this);
