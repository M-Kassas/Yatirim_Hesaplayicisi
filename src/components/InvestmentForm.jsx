function InvestmentForm({ onChangeInput, userInput }) {
  return (
    <div>
      <div id="user-input">
        <div className="input-group">
          <p>
            <label >İlk Yatırım</label>
            <input
              type="number"
              required
              value={userInput.initialInvestment}
              onChange={(event) => onChangeInput('initialInvestment', event.target.value)}
            />
          </p>
          <p>
            <label >Yıllık Yatırım</label>
            <input
              type="number"
              required
              value={userInput.annualInvestment}
              onChange={(event) => onChangeInput('annualInvestment', event.target.value)}
            />
          </p>
        </div>

        <div className="input-group">
          <p>
            <label >Beklenen Getİrİ (%)</label >
            <input
              type="number"
              required
              value={userInput.expectedReturn}
              onChange={(event) => onChangeInput('expectedReturn', event.target.value)}
            />
          </p>
          <p>
            <label >Süre (Yıllar)</label>
            <input
              type="number"
              required
              value={userInput.duration}
              onChange={(event) => onChangeInput('duration', event.target.value)}
            />
          </p>
        </div>
      </div>
    </div>
  )
}

export default InvestmentForm
