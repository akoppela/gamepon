class DealsController < ApplicationController
  def show
    @id = params[:id].to_i
    if request.xhr?
      response.content_type = Mime::HTML
      render :partial => 'deals/show'
    else
      render
    end
  end
end
