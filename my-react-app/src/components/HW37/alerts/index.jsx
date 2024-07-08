import styles from './index.scss'

const alertSVG = (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2L1 21h22L12 2z" stroke="#FFA500" strokeWidth="2" fill="none"/>
      <path d="M12 8v4M12 16h.01" stroke="#FFA500" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const blockSVG = (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#FF0000" strokeWidth="2" fill="none"/>
      <path d="M7 7l10 10" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const checkSVG = (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#00FF00" strokeWidth="2" fill="none"/>
      <path d="M7 12l3 3 7-7" stroke="#00FF00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const infoSVG = (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="#000000" strokeWidth="2" fill="none"/>
      <path d="M12 16v-4M12 8h.01" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
  const bellSVG = (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M12 22c1.104 0 2-.896 2-2H10c0 1.104.896 2 2 2zM18 16v-5c0-3.071-1.637-5.659-4.5-6.32V4a1.5 1.5 0 1 0-3 0v.68C7.636 5.341 6 7.929 6 11v5l-2 2v1h16v-1l-2-2z" stroke="#0000FF" strokeWidth="2" fill="none"/>
    </svg>
  );

  const svgmapping = {
    alert: alertSVG,
    block: blockSVG,
    check: checkSVG,
    info: infoSVG,
    bell: bellSVG,
  }

  const statusClass = {
    alert: 'alert__item--warning',
    block: 'alert__item--block',
    check: 'alert__item--check',
    info: 'alert__item--info',
    bell: 'alert__item--bell',
  };

export const Alerts = ({ status, setPage }) => {
    
    const currentSvg = svgmapping[status] || infoSVG;
    const currentClass = statusClass[status] || '';
    const clickclack = (page) => {
      setPage(page);
    } 

    return (
        
          <div className={`alert__item ${currentClass}`}>
            <div className="item__svg">{currentSvg}</div>
            <div className="item__text">
              <h2>Llorem Ipsum</h2>
            </div>
            <div className="item__closeBtn">
              <svg className="alert__img alert__img-close" width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="4.22217" y="2.80762" width="32" height="4" rx="2" transform="rotate(45 4.22217 2.80762)" fill="#000"/>
                <rect x="2.80762" y="25.7781" width="32" height="4" rx="2" transform="rotate(-45 2.80762 25.7781)" fill="#000"/>
              </svg>
            </div>
          </div>
        
    );
};

