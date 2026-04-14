import React, { Component } from 'react'

export default class PayPalDonateButton extends Component{
    render() {
        return (
            <form class="donateBtn" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="business" value="WLN94HEFXXPSU" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="amount" value="5" />
                <input type="image" src="https://viatesting.files.wordpress.com/2020/03/paypal-donate-button.png?w=199&h=77" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
                <img alt="" border="0" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" />
            </form>
        )
    }
    
}