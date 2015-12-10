class HomeController < ApplicationController

  helper_method :resource_name, :resource, :devise_mapping

  def index
    @stream = Shoutout::Stream.new("http://rosetta.shoutca.st:9233/stream")
    @stream.connect
    @favorites = current_user.favorite_songs
  end

  def refresh
    @stream = Shoutout::Stream.new("http://rosetta.shoutca.st:9233/stream")
    @stream.connect
    respond_to do |format|
      format.js {render :song_data}
    end
  end

  def resource_name
    :user
  end

  def resource
    @resource ||= User.new
  end

  def devise_mapping
    @devise_mapping ||= Devise.mappings[:user]
  end


end
