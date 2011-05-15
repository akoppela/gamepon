class CommentsController < ApplicationController
  def index
    if request.xhr?
      response.content_type = Mime::HTML
      render :partial => 'comments/index'
    end
  end
end
