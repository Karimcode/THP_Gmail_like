class TasksController < ApplicationController
  before_action :authenticate_user!
  def new
    @categories = Category.all
  end

  def create
    @task = Task.new(task_params)
    @category = Category.find(category_params)
    @task.category = @category
    if @task.save
      respond_to do |format|
        format.html {
          flash[:notice] = "Task created"
        redirect_to root_path }
        format.js { flash.now[:notice] = "Task created" }
      end
    else
      respond_to do |format|
        format.html {
          flash.now[:notice] = "Please try again"
        redirect_to root_path }
        format.js { flash.now[:notice] = "Please try again"}
      end
    end
  end

  def edit
    @task = Task.find(params[:id])
    @categories = Category.all

  end

  def update
    if params[:origin] == "checkbox" then
      @task = Task.find(params[:id])
      (!params[:task])? (@task.update(status: false)):(@task.update(status: true))
      respond_to do |format|
        format.html {
          flash[:notice] = "Task Status edited"
        redirect_to root_path }
        format.js { flash[:notice] = "Task Status edited"}
      end
    else
      @task = Task.find(params[:id])
      @task.update(task_params)
      respond_to do |format|
        format.html {
          flash[:notice] = "Task edited"
        redirect_to root_path }
        format.js { flash[:notice] = "Task edited"}
      end
    end
  end

  def index
    @tasks = Task.all
  end

  def destroy
    @task = Task.find(params[:id])
    @taskId = @task.id
    @task.destroy
    respond_to do |format|
      format.html {
        flash[:notice] = "Task deleted"
      redirect_to root_path }
      format.js { flash.now[:notice] = "Task deleted" }
    end
  end


  private

  def task_params
    params.permit(:title, :deadline, :description)
  end

  def category_params
    params.require(:Category)
  end

end
