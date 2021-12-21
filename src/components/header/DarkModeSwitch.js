import React from 'react';

const DarkModeSwitch = () => {
    return (
        <div className="dark-mode-switch d-flex pt-3">
            <div className="custom-control custom-switch mx-auto mx-md-0">
                <input type="checkbox" className="custom-control-input me-2" id="darkSwitch" />
                <label className="custom-control-label" htmlFor="darkSwitch">Mode sombre</label>
            </div>
        </div>
    )
}

export default DarkModeSwitch;