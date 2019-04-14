class Api::V1::GetController < ApplicationController

  def index
    url = "https://api.evenfinancial.com/originator/rateTables/28e489b1-92b4-4ae0-9677-bbe98fe977f8"

    headers={
      'Accept': 'application/vnd.evenfinancial.v1+json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer e7675dd3-ff3b-434b-95aa-70251cc3784b_88140dd4-f13e-4ce3-8322-6eaf2ee9a2d2'
    }

    response=HTTParty.get(url, headers: headers)

    @uuid = response.body

    render json: @uuid

  end
end
