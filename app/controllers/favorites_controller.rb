class FavoritesController < ApplicationController

  def create
    :artist = @stream.metadata.artist
    track = Song.find_by( title: params[:song_title] )


end
