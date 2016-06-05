import React, { Component, PropTypes } from "react";

class LanguageCard extends Component {

  render() {
    const { locale } = this.props;
    return (
      <div shadow={2} style={{width: "100%"}}>
        <h2>Language Options</h2>
        <div>
          En <input type="radio" name="lang" checked={ locale === "en" } onChange={() => this.handleLanguageSwitch("en")}/><br/>
          繁 <input type="radio" name="lang" checked={ locale === "zh-Hans" } onChange={() => this.handleLanguageSwitch("zh-Hans")}/><br/>
          简 <input type="radio" name="lang" checked={ locale === "zh-Hans-CN" } onChange={() => this.handleLanguageSwitch("zh-Hans-CN")} /><br/>
        </div>
      </div>
    );
  }

  handleLanguageSwitch(lang) {
    this.props.onLanguageSelect(lang);
  }
}

LanguageCard.propTypes = {
  locale: PropTypes.string.isRequired,
  onLanguageSelect: PropTypes.func.isRequired
};

LanguageCard.defaultProps = {
};

export default LanguageCard;
