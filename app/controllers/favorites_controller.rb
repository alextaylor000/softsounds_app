class FavoritesController < ApplicationController

    before_action :authenticate_user!

    def index
      song = Song.find_by_track(params[:track])
      if song && song.favorited_by(current_user)
        render json: {favorited: true}
      else
        render json: {favorited: false}
      end
    end

    def create
      # render json: params
      song = Song.find_by_track(params[:track])
      unless song
        song = Song.create( track:  params[:track],
                            artist: params[:artist])
      end
      favorite = Favorite.new
      favorite.user = current_user
      favorite.song = song
      favorite.save
      render json: {success: true}
    end

    def destroy
      song = Song.find_by_track(params[:track])
      #favorite = current_user.favorites.find(params[:id])
      favorite = current_user.favorites.find_by(song: song)
      if favorite
        favorite.destroy
        render json: {success: :true}
      end
    end

end
