class HomeController < ApplicationController

  def index
    @stream = Shoutout::Stream.new("http://rosetta.shoutca.st:9233/stream")
    @stream.connect
  end


    def refresh
      @stream = Shoutout::Stream.new("http://rosetta.shoutca.st:9233/stream")
      @stream.connect
      respond_to do |format|
        format.js {render :song_data}
      end
    end

    

end
