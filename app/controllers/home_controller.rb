class HomeController < ApplicationController

  helper_method :resource_name, :resource, :devise_mapping

  def index
    @stream1 = Shoutout::Stream.new("http://rosetta.shoutca.st:9368/stream")
    @stream1.connect
    @stream2 = Shoutout::Stream.new("http://rosetta.shoutca.st:9233/stream")
    @stream2.connect
    if user_signed_in?
    @favorites = current_user.favorite_songs.order("created_at DESC")
    @favoriteartists = current_user.favorite_songs.order("artist ASC")
    end
  end

  def refresh
    @stream1 = Shoutout::Stream.new("http://rosetta.shoutca.st:9368/stream")
    @stream1.connect
    @stream2 = Shoutout::Stream.new("http://rosetta.shoutca.st:9233/stream")
    @stream2.connect
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
